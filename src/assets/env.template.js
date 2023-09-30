(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["PROTOCOL"] = "${PROTOCOL}";
  window["env"]["VAAAS_API_BASE_URL"] = "${VAAAS_API_BASE_URL}";
  window["env"]["API_PORT"] = "${API_PORT}";
  window["env"]["URL_PREFIX"] = "${URL_PREFIX}";
})(this);
