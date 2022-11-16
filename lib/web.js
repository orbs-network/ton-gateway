"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
window.TonGateway = {
    create: () => {
        return new index_1.Gateway();
    },
    getHttpEndpoint: index_1.getHttpEndpoint,
    getTonApiV4Endpoint: index_1.getTonApiV4Endpoint,
};
//# sourceMappingURL=web.js.map