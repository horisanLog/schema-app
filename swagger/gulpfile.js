const { watch } = require('gulp');
const { exec } = require('child_process');

const swaggerCheck = (cb) => {
  const command = "npm run merge"
  exec(command, function (err, output, code) {
    if (err || code.length > 0) {
      console.log('=== 更新失敗 ===')
      console.log(code)
    }
  })
  cb();
}
exports.default = () => {
  watch(['src/**/*.yml','!src/swagger.yml'], swaggerCheck);
}
