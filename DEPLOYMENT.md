# Guía de Despliegue (React + S3 + CloudFront)

Este proyecto está configurado para desplegarse automáticamente a AWS S3 y CloudFront mediante GitHub Actions.

## Requisitos en AWS

1.  **S3 Bucket**: Crea un bucket habilitado para **Static Website Hosting**.
2.  **CloudFront Distribution**: Crea una distribución que apunte al bucket de S3.
    *   Asegúrate de configurar el `Default Root Object` como `index.html`.
    *   Configura las `Error Responses` para redirigir el error 404/403 a `index.html` con un código 200 (necesario para React Router si se usa).
3.  **IAM User**: Crea un usuario con los siguientes permisos mínimos:
    *   `s3:Sync` (Put, Get, Delete, List) en el bucket.
    *   `cloudfront:CreateInvalidation` en la distribución.

## Configuración en GitHub

Agrega los siguientes **Secrets** en tu repositorio (`Settings > Secrets and variables > Actions`):

| Secret | Descripción |
| :--- | :--- |
| `AWS_ACCESS_KEY_ID` | Tu ID de clave de acceso de AWS. |
| `AWS_SECRET_ACCESS_KEY` | Tu clave de acceso secreta de AWS. |
| `S3_BUCKET_NAME` | El nombre del bucket (ej: `jpmarchant-site`). |
| `CLOUDFRONT_DISTRIBUTION_ID` | El ID de tu distribución de CloudFront. |

## Despliegue Manual (Opcional)

Si deseas construir el proyecto localmente:

```bash
yarn install
yarn build
```

El contenido resultante estará en la carpeta `dist/`.
