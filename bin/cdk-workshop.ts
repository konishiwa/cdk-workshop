#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();
// instantiates the CdkWorkshopStack class from the lib/cdk-workshop-stack.ts
new CdkWorkshopStack(app, 'CdkWorkshopStack');
