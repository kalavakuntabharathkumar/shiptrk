# Optional AWS serverless deployment

The frontend is deployable to S3 + CloudFront. For a production integration, create API Gateway routes backed by Lambda functions, and use DynamoDB for shipment records. This repository currently uses a local Redux in-memory dataset; the AWS resources are documented as a deployment target, not provisioned or connected.

Suggested endpoints:
- `GET /shipments?status=In%20transit`
- `GET /shipments/{shipmentId}`
- `PATCH /shipments/{shipmentId}`
- `POST /shipments`
