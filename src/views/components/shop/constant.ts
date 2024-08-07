export const SIZE = ["S", "M", "L", "XL"];
export const COLOR = ["Red", "Blue", "Green", "White"];
interface FilterType {
  index: number;
  name: string;
}

export const TYPE_FILTER: { [key: number]: FilterType } = {
  0: {
    index: 0,
    name: "Size",
  },
  1: {
    index: 1,
    name: "Color",
  },
};

export const LIST_BTN_FILTER = [
  { id: 0, label: TYPE_FILTER[0].name, disable: false },
  { id: 1, label: TYPE_FILTER[1].name, disable: false },
];
