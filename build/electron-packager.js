require("electron-packager")({
  dir: `${__dirname}/../`,
  overwrite: true,
  asar: true,
  icon: `${__dirname}/../assets/icon.ico`,
})
  .then((success) => {
    console.log(success);
  })
  .catch((err) => {
    console.error(err);
  });
