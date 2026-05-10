# 🫀 Don d'Organe — Application de Révision Brevet

Application web interactive pour réviser le sujet **"Pourquoi et comment le don d'organe peut sauver des vies"** dans le cadre de l'oral du **Brevet des Collèges**.

> Conçue pour Elise 🎓 — 5 minutes de présentation + 10 minutes de questions

---

## ✨ Fonctionnalités

| Module | Contenu |
|--------|---------|
| 📋 **Fiches** | 6 fiches de révision complètes (intro, pourquoi vital, processus, loi & éthique, avenir, questions jury) |
| 🃏 **Mémo** | 30 cartes à retourner pour mémoriser définitions et chiffres clés |
| ✏️ **Quiz** | 100 questions QCM avec explications, classées en 6 catégories |

---

## 🚀 Installation & Utilisation

### Option 1 — Ouvrir directement (recommandé)

```bash
# Cloner le dépôt
git clone https://github.com/TON_USERNAME/don-organe-revision.git

# Ouvrir dans le navigateur
open don-organe-revision/index.html
```

Aucune dépendance, aucun serveur requis. L'application fonctionne **entièrement en local** dans le navigateur.

### Option 2 — Avec GitHub Pages (accès en ligne)

1. Aller dans **Settings** → **Pages**
2. Source : `main` branch, dossier `/root`
3. Enregistrer → L'app sera disponible sur `https://TON_USERNAME.github.io/don-organe-revision`

### Option 3 — Serveur local (développement)

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Puis ouvrir `http://localhost:8000`

---

## 📁 Structure du projet

```
don-organe-revision/
├── index.html          # Page principale (structure HTML)
├── src/
│   ├── style.css       # Styles et thème visuel
│   ├── data.js         # 30 cartes mémo + 100 questions quiz
│   └── app.js          # Logique navigation, mémo, quiz
├── docs/
│   └── plan-revision.md  # Plan de révision 5 jours
└── README.md
```

---

## 🎯 Contenu pédagogique

### 6 Fiches de révision
- **I. Introduction** — Accroche + problématique (30 sec)
- **II. Pourquoi vital ?** — Maladies, organes greffables, chiffres clés (1 min)
- **III. Comment ça marche ?** — Les 5 étapes du don, don du vivant (1 min 30)
- **IV. Loi & Éthique** — Consentement présumé, loi 2017, principes éthiques (1 min)
- **V. Avenir médical** — Xénogreffes, bioimpression 3D, organes artificiels (30 sec)
- **VI. Questions jury** — 6 questions-pièges avec réponses rédigées

### 100 questions de quiz
| Catégorie | Nombre |
|-----------|--------|
| Chiffres clés | 20 |
| Définitions médicales | 20 |
| Processus du don | 20 |
| Loi & Éthique | 20 |
| Médical approfondi | 10 |
| Avenir & Recherche | 10 |

---

## 📅 Plan de révision recommandé

| Jour | Activité |
|------|----------|
| Jour 1 | Lire toutes les fiches |
| Jour 2 | Mémo — toutes les 30 cartes |
| Jour 3 | Quiz — 50 premières questions |
| Jour 4 | Quiz — 50 dernières questions |
| Veille | Relire les fiches + mémo rapide |

---

## 🖥️ Compatibilité

- ✅ Tablette tactile (optimisé)
- ✅ Ordinateur (Chrome, Firefox, Safari, Edge)
- ✅ Smartphone
- ✅ Hors ligne (pas de connexion requise après chargement)

> Les polices Google Fonts nécessitent une connexion internet pour le premier chargement.

---

## 📚 Sources

- [Agence de la Biomédecine](https://www.agence-biomedecine.fr)
- [France ADOT](https://blog.france-adot.org)
- Loi n°2017-227 de modernisation du système de santé (consentement présumé)
- Loi Caillavet du 22 décembre 1976

---

## 📄 Licence

Projet éducatif libre — usage personnel et scolaire autorisé.
