const items = [
  {
    type: "type1",
    category: "category1",
    data: {
      program_id: 8659,
      card_type: "plastic",
    },
  },
  {
    type: "type1",
    category: "category1",
    data: {
      program_id: 8659,
      card_type: "Recurring",
    },
  },
  {
    type: "type1",
    category: "category2",
    data: {
      program_id: 8659,
      card_type: "Recurring",
    },
  },
];

const mappers = [
  {
    type: "type1",
    category: "category1",
    translate: "translate default",
    modalName: "modalDefault",
    predicates: [
      {
        rules: [
          {
            fieldName: "data.program_id",
            type: "LIST_INCLUDE",
            value: [8659, 99],
          },
          { fieldName: "data.card_type", type: "EQUAL", value: "plastic" },
        ],
        translate: "translate Custom",
        modalName: "modalDetailsCustom",
      },
    ],
  },
];

const setTranslate = (item) => {
  let mapperItem = mappers.find(
    ({ type, category }) => item.type === type && item.category === category
  );

  if (!mapperItem) return null;

  if (mapperItem?.predicates?.length > 0) {
    mapperItem?.predicates?.forEach((predicate) => {
      const rulesItem = validateRules(predicate?.rules, item);
      if (rulesItem) {
        mapperItem = {
          ...mapperItem,
          translate: predicate?.translate,
          modalName: predicate?.modalName,
        };
        return mapperItem;
      }
    });
  }

  return {
    translate: mapperItem?.translate,
    modalName: mapperItem?.modalName,
  };
};

const validateRules = (rules, item) => {
  let validate = false;
  rules?.forEach(({ fieldName, value, type }) => {
    switch (type) {
      case "DIFFERENT":
        validate = getItemValue(fieldName, item) != value;
        break;
      case "INCLUDE":
        validate = getItemValue(fieldName, item)?.includes(value);
        break;
      case "LIST_INCLUDE":
        validate = value?.includes(getItemValue(fieldName, item));
        break;
      default:
        validate = getItemValue(fieldName, item) == value;
        break;
    }

    if (!validate) return null;
  });

  return validate ? rules : null;
};

const getItemValue = (fieldName, item) => {
  const result = fieldName
    ?.split(".")
    .reduce(
      (itemValue, fieldNameItem) => itemValue[fieldNameItem],
      item
    );

  return result;
};

items.forEach((item) => {
  console.log("here >>>", setTranslate(item));
});
