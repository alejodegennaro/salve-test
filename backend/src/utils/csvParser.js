import fs from 'fs';
import {parse} from 'csv-parse';
import path from 'path';

const resourcesCsv = path.join(__dirname, '..', '..', 'resources/');

export const getCSV = async (file) => {
  const response = new Promise((resolve, reject) => {
    const parser = parse({columns: true}, function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
    fs.createReadStream(resourcesCsv + file)
      .on('error', function (e) {
        return reject(e);
      })
      .pipe(parser);
  });

  return response;
};
