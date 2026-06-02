# ▚ PSYTRANCE STUDIO

**Generador audiovisual en vivo, en un solo archivo HTML.** La máquina genera música
electrónica (psytrance, techno y más) en tiempo real con Web Audio API, mientras pinta
visuales WebGL reactivas al sonido. Pensado para tocar en vivo y proyectar.

🎛️ **Demo online:** [ravenlight.net/psy](https://www.ravenlight.net/psy)

---

## ¿Qué hace?

Es un instrumento + VJ tool todo-en-uno que corre en el navegador, sin instalar nada.

### 🔊 Motor de sonido
- **Géneros** seleccionables (psytrance, techno, hard, DnB…) desde el título.
- **Secuenciador generativo** que evoluciona solo: `Evolve`, `Mutate` y `Lock` sobre un
  "ADN" de la pista.
- **Síntesis modular:** kick (Psy / Techno / Hard / Sub / DnB), líneas de bajo
  (Rolling, Gap, Tresillo, Offbeat, Galope, Driving, Reese) y leads (Acid 303, Hoover,
  Pluck, FM Bell, Supersaw, Square, Saw).
- **Capas** on/off en vivo: Kick · Bass · Hats · Perc · Acid · Pad.
- **FX:** filtro, delay, reverb, drive, gate y stereo width — modo manual, auto o IA.
- **Máster** con soft-clip + auto-nivel y medidor de clipping.
- **BPM** ajustable (80–190) y control de acordes.

### 🎹 Control
- **Teclado** del compu (A-S-D-F-G-H-J-K) toca el lead, con snap a escala.
- **Theremin XY** táctil.
- Entrada **MIDI**.
- **Mic / voz** y carga de **samples** propios.
- One-shots: Riser, Impacto, Zap, Voz.

### 🌀 Visuales
- Shaders WebGL: **Portal · Prisma · Raíz · Pliegue · Vórtice · Caleidoscopio**.
- Presets **Milkdrop** vía [butterchurn](https://github.com/jberg/butterchurn).
- Cámara, intensidad reactiva al audio.
- **Ventana de salida** independiente para mandar la visual a un proyector / segunda pantalla.

### 💾 Sesión
- **REC** graba el audio.
- **VID** graba **video + audio** (la visual que se ve en pantalla) — listo para subir a redes.
- Guardar / cargar sesión (recuerda género, escala, efectos y todo el estado).
- Pantalla completa.
- 📲 **Instalable y offline:** se puede instalar como app y funciona sin internet (incluido Milkdrop).

---

## Cómo se usa

1. Abrí el archivo `psytrance_studio.html` en un navegador (Chrome / Edge / Firefox).
2. Tocá la pantalla para encender el audio (lo pide el navegador).
3. `▶ PLAY` y a jugar. El título cambia el género; la máquina arranca a evolucionar sola.

> ⚠️ Para usar **micrófono o cámara** hay que servirlo por **HTTPS** (o abrirlo desde la
> demo online). Abierto como archivo local funciona todo lo demás.

---

## Créditos

Hecho por **Ravenlight** 🦅

- 🌐 Web: [ravenlight.net](https://www.ravenlight.net)
- 📸 Instagram: [@vjravenlight](https://www.instagram.com/vjravenlight)
- 🎛️ Demo: [ravenlight.net/psy](https://www.ravenlight.net/psy)

### Colaboradores
- [jpupper](https://github.com/jpupper)

### Librerías usadas
- [butterchurn](https://github.com/jberg/butterchurn) + presets — visuales estilo Milkdrop (incluidas en `libs/` para que funcione offline).
- Web Audio API · WebGL · Web MIDI · MediaRecorder (todo nativo del navegador).

---

## Hoja de ruta (próximas mejoras)

- [ ] Editor de patrón a mano (grilla de pasos clickeable).
- [ ] Varios presets con nombre + compartir por link.
- [ ] Exportar por pistas separadas (stems).
- [ ] Captura/GIF de muestra para este README.

---

## Licencia

[MIT](LICENSE) — usalo, modificalo y compartilo libremente, manteniendo el crédito.

---

*Project Ravenlight · Renacidos Media Studio*
