# Source du design

Les fichiers suivants sont des copies STRICTES de la plateforme (D-05). Ne pas les modifier ici : toute évolution se fait d'abord dans la plateforme, puis on recopie.

- Dépôt : thedevloppersTeam/school_management_frontend_2
- Branche : develop
- Commit : 3b8bbe49246a567d074b9aef22504b80c25ac3ec (2026-11-08)
- Fichiers copiés à l'identique : tailwind.config.js, postcss.config.mjs, app/globals.css, DESIGN.md
- Adapté (non copié) : app/layout.tsx (mêmes polices Libre Baskerville et Inter, sans Cookie ni Lobster, réservées au bulletin)

Vérifier l'alignement :

    git -C <chemin-plateforme> show 3b8bbe4:app/globals.css | Compare-Object (Get-Content app/globals.css)
