<div align="center">

# HagiCode

<p>
  <a href="./README.md">English</a> ·
  <a href="./README.zh-CN.md">简体中文</a> ·
  <a href="./README.zh-Hant.md">繁體中文</a> ·
  <a href="./README.ja-JP.md">日本語</a> ·
  <a href="./README.ko-KR.md">한국어</a> ·
  <a href="./README.de-DE.md">Deutsch</a> ·
  <a href="./README.fr-FR.md">Français</a> ·
  <a href="./README.es-ES.md">Español</a> ·
  <a href="./README.pt-BR.md">Português (Brasil)</a> ·
  <a href="./README.ru-RU.md">Русский</a>
</p>

<p><strong>HagiCode sorgt dafür, dass die KI beim Ändern deines Codes den Kontext nicht verliert: erst das Repository verstehen, dann den Umfang festlegen, dann mit nachvollziehbarem Verlauf ausführen.</strong></p>

<p>Ein KI-Workbench für die Projektentwicklung. Sie bindet die Agent-CLIs und Modelle an, die du bereits nutzt, sodass du den Editor nicht wechseln musst.</p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/hero-flow-de-DE-dark.svg" />
  <img src="./assets/hero-flow-de-DE-light.svg" alt="HagiCode verbindet deine Agent-CLIs (Claude Code, Codex, GitHub Copilot, OpenCode und mehr) mit einer Workbench in vier Phasen: Verstehen, Umfang festlegen, Ausführen, Prüfen." width="740" />
</picture>

<p>
  <a href="https://docs.hagicode.com/de-DE/installation/"><strong>Installationsanleitung</strong></a>
  ·
  <a href="https://docs.hagicode.com/de-DE/product-overview/">Produktüberblick</a>
  ·
  <a href="https://hagicode.com/">Website</a>
  ·
  <a href="https://apps.microsoft.com/detail/9N3PM0N3SVDW">Microsoft Store</a>
  ·
  <a href="https://docs.hagicode.com/de-DE/blog/">Blog</a>
</p>

<img src="./assets/workspace-overview.png" alt="HagiCode-Workspace mit Sitzungsliste, Commit-Notizen und den wichtigsten Aktionen oben." width="100%" />

</div>

---

## Auf einen Blick

- **Gängige Agent-CLIs** in einer Workbench, etwa Claude Code, Codex, GitHub Copilot, OpenCode und weitere. Die ganze Liste steht unter [unterstützte Tools](https://docs.hagicode.com/de-DE/related-software-installation/ai-agent-cli/).
- **Windows, macOS und Linux**, als Desktop-App oder als selbst gehosteter Container.
- **Kostenlose Kernfunktionen.** Desktop, Container und Microsoft Store sind drei Wege, HagiCode zu bekommen, keine drei Bezahlstufen.
- **Standardmäßig schreibgeschützt.** Eine normale Sitzung liest deinen Code nur; wechsle in den Bearbeitungsmodus, wenn du Änderungen willst.

## Erste Schritte

**1. Wähle, wo HagiCode läuft.**

| Du arbeitest unter | Wähle | Auf dem Host nötig | |
| --- | --- | --- | --- |
| Windows | **Microsoft Store** | Node.js 24+ und Git | [Herunterladen](https://apps.microsoft.com/detail/9N3PM0N3SVDW) |
| macOS, Linux oder Windows ohne Store | **Desktop** | Node.js 24+ und Git | [Herunterladen](https://hagicode.com/desktop/) |
| Server, NAS oder Team | **Container** (Docker Compose) | Docker. Kein Node.js und kein Git nötig | [Bereitstellen](https://hagicode.com/container/) |

Schritt-für-Schritt-Anleitungen findest du im [Installationsleitfaden](https://docs.hagicode.com/de-DE/installation/).

**2. Einrichten.** Schließe den [Einrichtungsassistenten](https://docs.hagicode.com/de-DE/quick-start/wizard-setup/) beim ersten Start ab und lege mindestens ein Projekt an.

**3. Sitzung starten.** Öffne zuerst eine schreibgeschützte [normale Sitzung](https://docs.hagicode.com/de-DE/quick-start/conversation-session/), um das Projekt zu verstehen. Wenn du Code ändern willst, wechsle in den Bearbeitungsmodus oder starte eine [Vorschlagssitzung](https://docs.hagicode.com/de-DE/quick-start/proposal-session/).

## So läuft eine Entwicklungsaufgabe ab

1. **Erst verstehen.** Analysiere den bestehenden Code in einer schreibgeschützten normalen Sitzung.
2. **Umfang festlegen.** Wähle bei komplexen Änderungen in einer Vorschlagssitzung Projekt und Repositories und einigt euch auf Ziele, Aufgaben und Validierung, bevor etwas bearbeitet wird.
3. **Ausführen.** Wechsle in den Bearbeitungsmodus und arbeite entlang der vereinbarten Ziele, Aufgaben und Validierung.
4. **Prüfen und Kontext behalten.** Kontrolliere Sitzungen und Ausführungsstatus in der Workbench und lass AI Compose Commit die Commits ordnen. Vorschläge und Commit-Protokolle bleiben für später erhalten, und MonoSpecs koordiniert Änderungen über mehrere Repositories hinweg.

<p align="center">
  <img src="./assets/create-proposal.png" alt="Schublade für neue Vorschläge: Projekt wählen, Repositories als Referenz oder bearbeitbar markieren und die zusammengeführte Anfrage ansehen." width="49%" />
  <img src="./assets/proposal-workflow.png" alt="Vorschlagssitzung mit den Workflow-Phasen von Erstellung und Prüfung bis zu Ausführung und Archivierung." width="49%" />
</p>

Du brauchst nicht jedes Mal einen Vorschlag. Für eine schnelle Frage zum Code starte mit einer normalen Sitzung.

## Warum HagiCode

- **Vorschlagsgetriebenes KI-Coding**: `OpenSpec` verbindet Umfang, Aufgaben, Auswirkungsanalyse, Validierung und Ausführung, statt komplexe Arbeit in blinde Änderungen abgleiten zu lassen.
- **Eigene Agent-CLI und eigenes Modell**: CLI und Modell lassen sich getrennt voneinander wählen, sodass du nicht an eine Standardkombination gebunden bist.
- **Ein vollständiger Entwicklungsarbeitsplatz**: `MonoSpecs` für den Umfang über mehrere Repositories, `Skills` als installierbare Erweiterungen, `Vault` für wiederverwendbares Wissen, `AI Compose Commit` und `code-server`, um die Arbeit am selben Ort abzuschließen.
- **Spielerisches Feedback mit echten Signalen**: Erfolge, Tagesberichte, Effizienz-Multiplikatoren und Token-Durchsatz machen lange KI-Arbeit leichter lesbar. Es gehört zur Workbench, und du kannst es ignorieren.

<p align="center">
  <img src="./assets/skills-gallery.png" alt="Skills-Galerie mit durchsuchbaren, installierbaren Skills und Quellfiltern." width="49%" />
</p>

<p align="center">
  <img src="./assets/gamified-feedback.png" alt="Erfolgsansicht mit Tagesfortschritt, langfristigen Meilensteinen und spielerischem Feedback." width="100%" />
</p>

## Ein Rundgang durch den Workspace

<p align="center">
  <img src="./assets/art-repos-workbench.png" alt="Illustration: Kacheln verschiedener Repositories fließen in ein gemeinsames Workspace-Fenster." width="100%" />
</p>

<p align="center">
  <img src="./assets/tour-session-board.png" alt="Session-Board mit den Spalten Vorschlag &amp; Prüfung, Ausführung und Archiv; jede Karte zeigt ihren Status." width="100%" />
</p>

Sitzungen liegen nach Phase auf einem Board. Jede Karte zeigt, ob sie im Entwurf ist, läuft, auf eine Antwort wartet oder abgeschlossen ist.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/session-statuses-de-DE-dark.svg" />
  <img src="./assets/session-statuses-de-DE-light.svg" alt="Diagramm: Eine Sitzung geht von Entwurf über Wird ausgeführt zu Ausführung fertig und Abgeschlossen; zwischen Wird ausgeführt und Wartet auf Antwort gibt es eine Schleife." width="100%" />
</picture>

<p align="center">
  <img src="./assets/tour-conversation-session.png" alt="Normale Sitzung mit einer Frage zum Code, einem im Verlauf angezeigten Dateizugriff und der Antwort mit einem Änderungsvorschlag." width="100%" />
</p>

Eine normale Sitzung beantwortet Fragen zu deinem Code. Jede gelesene Datei erscheint im Verlauf, sodass du die Quelle einer Antwort nachprüfen kannst.

<p align="center">
  <img src="./assets/tour-monospecs-git.png" alt="Projektdetails, Git-Tab: drei Repositories sind ausgewählt, rechts oben die Aktion Super Commit." width="100%" />
</p>

Wähle in einem Projekt mehrere Repositories aus und führe Super Commit im Git-Tab für alle gemeinsam aus.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/super-commit-de-DE-dark.svg" />
  <img src="./assets/super-commit-de-DE-light.svg" alt="Diagramm: Die ausgewählten Repositories laufen durch eine Super-Commit-Aktion, und jedes Repository wird committet." width="100%" />
</picture>

<p align="center">
  <img src="./assets/tour-agents-workspace.png" alt="Agents-Workspace: Agents sind unter Claude Code und Codex gruppiert, jeweils mit ihrem Modell." width="100%" />
</p>

Agents sind nach Agent CLI gruppiert, und jeder zeigt das Modell, das er verwendet.

<p align="center">
  <img src="./assets/tour-vault-browser.png" alt="Vault-Browser mit registrierten Vaults links, einem Ordnerbaum und einer Markdown-Notiz rechts." width="100%" />
</p>

Der Vault hält Referenz-Repositories und Notizen zusammen; du durchsuchst ihre Dateien direkt im Workspace.

<p align="center">
  <img src="./assets/art-agent-hub.png" alt="Illustration: geometrische Abzeichen kreisen um einen leuchtenden Knotenpunkt." width="100%" />
</p>

## Integrierte Komponenten

Werkzeuge, auf denen HagiCode aufbaut oder mit denen es sich verbindet. Die meisten sind optional und lassen sich bei Bedarf einschalten. Im Tab Einstellungen → Integration findest du Git, GitHub, TokenMonitor und Code Server.

| Bereich | Komponente | Aufgabe in HagiCode |
| --- | --- | --- |
| **Agenten und Modelle** | [Agent-CLIs](https://docs.hagicode.com/de-DE/related-software-installation/ai-agent-cli/) | Claude Code, Codex, GitHub Copilot, OpenCode und weitere laufen direkt in der Workbench. |
| **Spezifikation und Umfang** | [OpenSpec](https://docs.hagicode.com/de-DE/related-software-installation/openspec/intro-openspec/) | Vorschlagsgetriebener Workflow, der Umfang, Aufgaben, Validierung und Ausführung verbindet. |
|  | [MonoSpecs](https://docs.hagicode.com/de-DE/guides/monospecs/) | Verwaltet Beziehungen zwischen Repositories und den Änderungsumfang über mehrere Repositories hinweg. |
| **Code und Versionskontrolle** | [Git](https://docs.hagicode.com/de-DE/user-guide/settings/#git) | Git-Profile geben KI-Commits einen eindeutigen Autor. Optionale Statusüberwachung aktiver Projekte. |
|  | [GitHub](https://docs.hagicode.com/de-DE/user-guide/settings/#github) | Nutzt deine lokale `gh`-Sitzung, um Sitzungen zu synchronisieren und GitHub-Daten zu importieren. Das Token bleibt nur im Arbeitsspeicher. |
|  | [code-server](https://docs.hagicode.com/de-DE/user-guide/settings/#code-server) | Einstieg zum Bearbeiten im Browser, damit du eine Änderung abschließen kannst, ohne die Workbench zu verlassen. Die Einstellungen zeigen Konfiguration und Status schreibgeschützt an. |
| **Wissen und Erweiterungen** | [Vault](https://docs.hagicode.com/de-DE/user-guide/vault/) | Sammelt Referenz-Repositories, Ordner und Notizen zur Wiederverwendung in späteren Aufgaben. |
|  | [Skills & HagiTask](https://docs.hagicode.com/de-DE/guides/skills/) | Die Skills-Galerie durchsuchen und Skills installieren oder HagiTask-Presets aus der Community-Galerie einrichten. |
| **Eingabe und Feedback** | [TokenMonitor](https://docs.hagicode.com/de-DE/user-guide/settings/#tokenmonitor) | Zeigt in der Statusleiste den heutigen Token-Verbrauch und die Kosten aus der TokenMonitor-Desktop-App. Mit HostHub-Adresse und -Geheimnis wird fast in Echtzeit aktualisiert. |
|  | [Doubao-Spracheingabe](https://docs.hagicode.com/de-DE/guides/voice-recognition/doubao/) | Vorschläge, Kommentare und Sitzungsnachrichten per Doubao-Spracherkennung (豆包) diktieren. |

## Für wen es gedacht ist

- **Passt gut:** Entwickler und Teams, die mehrere Repositories pflegen und komplexe Änderungen planen wollen, bevor sie laufen, oder die schon Claude Code, Codex oder eine andere Agent-CLI nutzen und sie in einer Workbench bündeln möchten.
- **Nicht nötig:** Wenn du im Editor nur ein paar Zeilen Vervollständigung brauchst, reichen deine bisherigen Tools.

## Erweiterungen

Details zu Plus und DLC findest du auf der Dokumentationsseite. Die Steam-Hauptanwendung wurde eingestellt; siehe die [FAQ zum Steam-Status](https://docs.hagicode.com/faq/steam-distribution-status/).

- [Hagicode Plus](https://docs.hagicode.com/bundles/hagicode-plus/) — Bundle- und Upgrade-Hinweise
- [Turbo Engine DLC](https://docs.hagicode.com/dlc/turbo-engine-dlc/) — höhere Parallelität bei Vorschlägen sowie Dokumentthemen, eigene Signatur, Branding und Avatare (Microsoft Store, Einmalkauf)

## Ausgewählte Projekte

- **[site](https://github.com/HagiCode-org/site)** - Offizielle Marketingseite und öffentliches GitHub-Landing-Repository
- **[desktop](https://github.com/HagiCode-org/desktop)** - Desktop-Client für lokale HagiCode-Workflows
- **[container](https://github.com/HagiCode-org/container)** - Selbst gehostete Bereitstellung für Teams und Serverumgebungen
- **[docs](https://github.com/HagiCode-org/docs)** - Dokumentationsseite mit dem maßgeblichen Produktüberblick und den Anleitungen

## Kommandozeilen-Tools

| Paket | Wofür | npm |
| --- | --- | --- |
| [`@hagicode/cli`](https://www.npmjs.com/package/@hagicode/cli) | Projekte, Vorschläge, Vaults, Chat und AutoTask im Terminal verwalten. | ![npm version](https://img.shields.io/npm/v/%40hagicode%2Fcli?logo=npm&color=cb3837&label=npm) |
| [`@hagicode/hagiscript`](https://www.npmjs.com/package/@hagicode/hagiscript) | Hagiscript-Sprachwerkzeuge und Laufzeitverwaltung. | ![npm version](https://img.shields.io/npm/v/%40hagicode%2Fhagiscript?logo=npm&color=cb3837&label=npm) |
| [`@hagicode/hagi18n`](https://www.npmjs.com/package/@hagicode/hagi18n) | Locale-Ressourcen prüfen, synchronisieren und verwalten. | ![npm version](https://img.shields.io/npm/v/%40hagicode%2Fhagi18n?logo=npm&color=cb3837&label=npm) |
| [`@hagicode/skillsbase`](https://www.npmjs.com/package/@hagicode/skillsbase) | Verwaltete Agent-Skills-Repositories anlegen und pflegen. | ![npm version](https://img.shields.io/npm/v/%40hagicode%2Fskillsbase?logo=npm&color=cb3837&label=npm) |

## Support

- [Dokumentation](https://docs.hagicode.com/de-DE/)
- [Blog](https://docs.hagicode.com/de-DE/blog/)
- [GitHub-Organisation](https://github.com/HagiCode-org)
- [Issues](https://github.com/HagiCode-org/site/issues)
- [KI-Ersatzrechner](https://cost.hagicode.com)

Bereit, die ganze Produktgeschichte zu entdecken? Starte auf [hagicode.com](https://hagicode.com/) und wähle den Weg, der zu deinem Workflow passt.
