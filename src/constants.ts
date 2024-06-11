import 'dotenv/config'
import { asNumber, asBoolean, asString } from './utils'

export const CONNECTION_TIMEOUT = asNumber('CONNECTION_TIMEOUT', 10000)
export const KEEP_ALIVE_TIMEOUT = asNumber('KEEP_ALIVE_TIMEOUT', 72000)
export const HTTP2_SESSION_TIMEOUT = asNumber('HTTP2_SESSION_TIMEOUT', 72000)
export const MAX_PARAM_LENGTH = asNumber('MAX_PARAM_LENGTH', 100)
export const BODY_LIMIT = asNumber('BODY_LIMIT', 1048576)
export const PLUGIN_TIMEOUT = asNumber('PLUGIN_TIMEOUT', 10000)
export const PORT = asNumber('PORT', 3000)
export const HOST = asString('HOST', 'localhost')
export const INCOMING_MIME = asString('INCOMING_MIME', 'application/json')
export const OUTGOING_MIME = asString('OUTGOING_MIME', 'application/json')
export const IGNORE_TRAILING_SLASH = asBoolean('IGNORE_TRAILING_SLASH', true)
export const IGNORE_DUPLICATE_SLASHES = asBoolean('IGNORE_DUPLICATE_SLASHES', true)
export const LOGGER = asBoolean('LOGGER', true)
export const REQUEST_ID_HEADER = asBoolean('REQUEST_ID_HEADER', false)
export const USE_HTTP2 = asBoolean('USE_HTTP2', false)

 // Max field name size in bytes
export const UPLOAD_FIELD_NAME_SIZE = asNumber('UPLOAD_FIELD_NAME_SIZE', 100)

// Max field value size in bytes
export const UPLOAD_FIELD_SIZE = asNumber('UPLOAD_FIELD_SIZE', 100)

// Max number of non-file fields
export const UPLOAD_FIELDS = asNumber('UPLOAD_FIELDS', 10)

// For multipart forms, the max file size in bytes
export const UPLOAD_FILESIZE = asNumber('UPLOAD_FILESIZE', 1000000)

// Max number of file fields
export const UPLOAD_FILES = asNumber('UPLOAD_FILES', 1)

// Max number of header key=>value pairs
export const UPLOAD_HEADER_PAIRS = asNumber('UPLOAD_HEADER_PAIRS', 2000)

// For multipart forms, the max number of parts (fields + files)
export const UPLOAD_PARTS = asNumber('UPLOAD_PARTS', 1000)

// Where files are uploaded
export const UPLOAD_PATH = asString('UPLOAD_PATH', process.env.TMP)

// Used for cookie signatures
export const COOKIE_SECRET = asString('COOKIE_SECRET', 'secret')

// Used for session signatures
export const SESSION_SECRET = asString('SESSION_SECRET', 'a string which is longer than 32 characters')

// Used for JWT tokens
export const JWT_SECRET = asString('JWT_SECRET', 'secret')