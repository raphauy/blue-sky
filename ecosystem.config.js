module.exports = {
  apps: [
    {
      name: "blue-sky",
      script: "pnpm",
      args: "run start -- -p 8053",
      interpreter: "none",
      cwd: "/var/www/rapha/blue-sky", // Ruta de trabajo actual de tu aplicación
    },
  ],
};
