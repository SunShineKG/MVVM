import observer from './observer'

const proxy = (self, data) => {

    Object.keys(data).forEach(key => {

        Object.defineProperty(self, key, {
            configurable: true,
            enumerable: true,
            get: () => {
              return self._data[key];
            },
            set: (val) => {
              self._data[key] = val
            }
        })
    });
  }

export default function initData(self) {
  proxy(self, self._data)

  observer(self._data)
}
