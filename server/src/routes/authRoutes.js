const router = require("express").Router();
const user = require("../models/User");

// Ruta de inicio de sesión
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const [user, created] = await user.findOrCreate({
      where: { username },
      defaults: { password },
    });

    //En caso de que el usuario ya exista, verificamos la contraseña
    if (!created && user.password !== password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const message = created
      ? "Usuario creado y autenticado"
      : "Usuario autenticado";
    return res.json({
      message,
      user: { id: user.id, username: user.username },
    });
  } catch (error) {
    console.error("Error en la autenticación:", error);
  }
});

module.exports = router;
