const {
  query,
  body,
  param,
  validationResult
} = require("express-validator");

const errorHandle = (message, statusCode, errResult) => {
  errResult = errResult || 0;
  message = message || "default error message from errorHandle";
  error = new Error(message);
  error.statusCode = statusCode || 500;
  if (errResult) {
    error.data = errResult.array();
  }
  throw error;
};

module.exports = {
  errorHandle: errorHandle,
  guardianController: {
    getList: [
      query("search")
        .optional()
        .trim()
        .isLength({
          min: 3,
          max: 90
        })
        .withMessage("Please input less than 60 chars and more than 3 for search text."),
      query("perPage")
        .optional()
        .trim()
        .isInt({
          min: 1,
          max: 50
        })
        .withMessage("Please use Integer for perPage and not more than 50")
        .isLength({
          min: 1,
          max: 2
        }),
      query("page")
        .optional()
        .trim()
        .isInt({
          min: 1
        })
        .withMessage("Please use Integer for current page")
        .isLength({
          min: 1,
          max: 7
        }),
      query("order")
        .optional()
        .trim()
        .isIn(["newest", "oldest"])
        .withMessage("Please input correct order strings.")
    ],
    getDetail: [
      param("articleId")
        .trim()
        .isLength({
          min: 5,
          max: 180
        })
        .withMessage(
          "Please input less than 120 chars and more than 5 chars for detail ID."
        )
    ]
  }
};