import Multipart from '@fastify/multipart'
import {
  UPLOAD_FIELD_NAME_SIZE,
  UPLOAD_FIELD_SIZE,
  UPLOAD_FIELDS,
  UPLOAD_FILESIZE,
  UPLOAD_FILES,
  UPLOAD_HEADER_PAIRS,
  UPLOAD_PARTS,
} from '../constants'

export default async function load (fastify) {
  await fastify.register(Multipart, {
    limits: {
      fieldNameSize: UPLOAD_FIELD_NAME_SIZE,
      fieldSize: UPLOAD_FIELD_SIZE,
      fields: UPLOAD_FIELDS,
      fileSize: UPLOAD_FILESIZE,
      files: UPLOAD_FILES,
      headerPairs: UPLOAD_HEADER_PAIRS,
      parts: UPLOAD_PARTS
    }
  })
}
