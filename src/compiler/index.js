import parse from './parse'
import optimize from './optimize'
import generate from './generate'

export default function createCompiler($el) {
  const ast = parse($el);
  console.log(ast)
  optimize(ast);
  console.log(ast)
  const code = generate(ast)
  console.log(code)
}