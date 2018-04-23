export default class VNode {
  constructor(tag, data, children, text, elm) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
  }
}

// 创建文本节点
export const createTextVNode = val => {
  return new VNode(undefined, undefined, undefined, String(val))
}

// 创建空节点
export const createEmptyNode = () => {
  return createTextVNode('')
}

// clone节点
export const cloneNode = node => {
  return new VNode(node.tag, node.data, node.children, node.text, node.elm)
}

