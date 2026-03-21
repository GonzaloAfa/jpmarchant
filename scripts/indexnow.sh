#!/bin/bash
# IndexNow - Notifica a Bing/Yandex que hay contenido nuevo
# Ejecutar después de cada deploy: bash scripts/indexnow.sh

API_KEY="72c7309121764c2b80bbeb7bb10e1f80"
HOST="jpmarchant.cl"

curl -s -X POST "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"$HOST\",
    \"key\": \"$API_KEY\",
    \"keyLocation\": \"https://$HOST/$API_KEY.txt\",
    \"urlList\": [
      \"https://$HOST/\",
      \"https://$HOST/publicaciones/\",
      \"https://$HOST/investigacion/\",
      \"https://$HOST/docencia/\",
      \"https://$HOST/trayectoria/\",
      \"https://$HOST/prensa/\",
      \"https://$HOST/contacto/\",
      \"https://$HOST/publicaciones/femicide-development-2025/\",
      \"https://$HOST/publicaciones/medidas-cautelares-2024/\",
      \"https://$HOST/publicaciones/cesd-escala-depresion-2023/\",
      \"https://$HOST/publicaciones/denunciar-violencia-2022/\",
      \"https://$HOST/publicaciones/nuevas-masculinidades-2014/\",
      \"https://$HOST/publicaciones/incesto-memoria-2013/\",
      \"https://$HOST/publicaciones/iglesia-genero-poder-2012/\",
      \"https://$HOST/publicaciones/fetos-detenidos-2012/\",
      \"https://$HOST/publicaciones/hinzpeter-foucault-2012/\",
      \"https://$HOST/publicaciones/reparacion-psicosocial-2012/\",
      \"https://$HOST/publicaciones/fill-no-franco-2012/\",
      \"https://$HOST/publicaciones/genero-carceles-2011/\",
      \"https://$HOST/publicaciones/desplazamiento-chaiten-2011/\",
      \"https://$HOST/publicaciones/represion-lenguaje-2010/\",
      \"https://$HOST/publicaciones/dictadura-dano-2009/\",
      \"https://$HOST/publicaciones/agresion-sexual-2009/\",
      \"https://$HOST/publicaciones/escuelas-vulnerables-2009/\",
      \"https://$HOST/publicaciones/reaccions-maternes-2009/\",
      \"https://$HOST/publicaciones/peritajes-psicologicos-2008/\"
    ]
  }"

echo ""
echo "IndexNow: 26 URLs enviadas a Bing/Yandex"
