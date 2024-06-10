import { pipeline } from 'node:stream'
import { UPLOAD_PATH } from './constants'
import util from 'node:util'
import fs from 'node:fs'

const pump = util.promisify(pipeline)

const FilenameGenerator = (filename) => filename

export function getUploadedFile (req, filenameGenerator = FilenameGenerator): string[] {
  const parts = req.files()
  const result = []

  for await (const part of parts) {
    const filename = UPLOAD_PATH + '/' + filenameGenerator(part.filename)
    await pump(part.file, fs.createWriteStream(filename))

    if (part.file.truncated) {
      // you may need to delete the part of the file that has been saved on disk
      // before the `limits.fileSize` has been reached
      throw new RangeError('File upload too big')
    } else {
      result.push(filename)
    }
  }

  return result
}

// https://github.com/fastify/fastify-multipart
