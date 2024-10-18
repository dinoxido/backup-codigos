import { getGuilda } from "./lib/personagens.js"
import getPersonagem from "./lib/personagens.js"
console.log(getPersonagem())
getGuilda()
// chamando função de outro arquivo
import {fs, path, http} from "./lib/nativo.cjs"
console.log(fs, path, http)