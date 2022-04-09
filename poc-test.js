const item = {
  type: "type1",
  category: "category1",
  data: {
    program_id: 8659,
    card_type: "plastic",
  },
};

const mappers = [
  {
    type: "type1",
    category: "category1",
    translate: "translate default",
    modalName: "modalDefault",
    predicates: [
      {
        rules: [
          { fieldName: "data.program_id", type: "EQUAL", value: "8659" },
          { fieldName: "data.card_type", type: "EQUAL", value: "plastic" },
        ],
        translate: "translate Custom",
        modalName: "modalDetailsCustom",
      },
    ],
  },
];

const setTranslate = (item) => {
  let result = mappers.find(
    ({ type, category }) => item.type === type && item.category === category
  );

  if (!result) return null;

  if (result?.predicates?.length > 0) {
    result?.predicates?.forEach((predicate) => {
      const rulesItem = validateRules(predicate?.rules, item);
      if (rulesItem) {
        result = {
          ...result,
          translate: predicate?.translate,
          modalName: predicate?.modalName,
        };
        return result;
      }
    });
  }

  return {
    translate: result?.translate,
    modalName: result?.modalName,
  };
};

const validateRules = (rules, item) => {
  rules?.forEach(({ fieldName, value, type }) => {
    let validate = false;

    switch (type) {
      case "DIFFERENT":
        validate = getItemValue(fieldName, item) != value;
        break;
      case "INCLUDE":
        validate = getItemValue(fieldName, item)?.includes(value);
        break;
      default:
        validate = getItemValue(fieldName, item) == value;
        break;
    }

    if (!validate) return null;
  });

  return rules;
};

const getItemValue = (fieldName, item) => {
  let _item = item;
  fieldName
    ?.split(".")
    ?.forEach((fieldNameItem) => (_item = _item[fieldNameItem]));
  return _item;
};

console.log("here >>>", setTranslate(item));
