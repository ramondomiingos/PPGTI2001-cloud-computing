"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";

const API_URL = process.env.NEXT_PUBLIC_API_URL || `http://${ window.location.hostname }:8001`;
    //'api.products-application.svc.cluster.local:8001';

export const dataProvider = dataProviderSimpleRest(API_URL);
