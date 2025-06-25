import ShoppingCart from "../models/ShoppingCart.js";
import Product from "../models/Products.js";

const shoppingCartController = {};

shoppingCartController.getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await ShoppingCart.findOne({ userId })
      .populate("userId")
      .populate("products.productId");

    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    // 🧮 Calcular subtotal
    const subtotal = cart.products.reduce((total, item) => {
      const price = item.productId.price || 0;
      return total + price * item.quantity;
    }, 0);

    const cartWithSubtotal = {
      ...cart.toObject(),
      total: subtotal,
    };

    res.json(cartWithSubtotal);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener carrito", error });
  }
};


// 2. Agregar producto al carrito (crear si no existe)
shoppingCartController.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    const subtotal = product.price * quantity;

    let cart = await ShoppingCart.findOne({ userId });

    if (!cart) {
      cart = new ShoppingCart({
        userId,
        products: [{ productId, quantity, subtotal }],
        total: subtotal,
      });
    } else {
      const index = cart.products.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (index !== -1) {
        // Producto ya existe → actualizar cantidad y subtotal
        cart.products[index].quantity += quantity;
        cart.products[index].subtotal =
          cart.products[index].quantity * product.price;
      } else {
        // Producto nuevo
        cart.products.push({ productId, quantity, subtotal });
      }

      // Recalcular total general
      cart.total = cart.products.reduce((acc, item) => acc + item.subtotal, 0);
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar al carrito", error });
  }
};

// 3. Eliminar un producto del carrito
shoppingCartController.removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const cart = await ShoppingCart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    cart.products = cart.products.filter(
      (item) => item.productId.toString() !== productId
    );

    cart.total = cart.products.reduce((acc, item) => acc + item.subtotal, 0);

    await cart.save();
    res.json({ message: "Producto eliminado del carrito", cart });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar producto", error });
  }
};

// 4. Vaciar/eliminar el carrito completo
shoppingCartController.deleteCart = async (req, res) => {
  try {
    await ShoppingCart.findByIdAndDelete(req.params.id);
    res.json({ message: "Carrito eliminado completamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar carrito", error });
  }
};


export default shoppingCartController;
