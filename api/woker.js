/* eslint-disable @typescript-eslint/no-var-requires */
const ffprobe = require('./node_modules/ffprobe/index.js');
const ffprobeStatic = require('ffprobe-static');
const childProcess = require('child_process');

ffprobe(
  'c:/temp/D0002100126_00000.mp4',
  { path: ffprobeStatic.path },
  function (err, info) {
    if (err) return done(err);

    // console.log(info);
    console.log(info.streams[0].width);
    console.log(info.streams[0].height);

    const cmd =
      // 'c:/ffmpeg/bin/ffprobe.exe -v quiet -hide_banner -show_streams -print_format ini c:/temp/D0002100126_00000.mp4';
      'c:/ffmpeg/bin/ffprobe.exe -v quiet -hide_banner -show_streams -print_format ini c:/temp/D0002100126_00000___.mp4';

    try {
      const stdout = childProcess.execSync(cmd);
      console.log('STDOUT:', stdout.toString());
    } catch (error) {
      //console.log('STDERR:', error.stderr.toString());
      console.log('STDERR:', error.stdout.toString());
    }

    console.log('done.');
  },
);
