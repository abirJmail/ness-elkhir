const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check(`username`, `this field is required`).notEmpty(),
  check(`email`, `this field is required`).notEmpty(),
  check(`email`, `this is not a valid email`).isEmail(),
  check(`telephone`, `this field is required`).notEmpty(),
  check(`telephone`, `this field is required`).isLength({ min: 8 }),
  check(`password`, `this field is required`).notEmpty(),
  check(`password`, `this is not a valid password`).isLength({
    min: 6,
    max: 10,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};