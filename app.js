// ==========================================
// BASE DE DATOS DE VALORES FISIOLÓGICOS (10 ESPECIES)
// ==========================================
const speciesPhysiology = {
  canine: { name: "Canino", temp: "37.5 - 39.2", hr: "60 - 140", rr: "10 - 30", crt: "Menor a 2", k: 10.1, tempMin: 37.5, tempMax: 39.2 },
  feline: { name: "Felino", temp: "38.0 - 39.2", hr: "140 - 220", rr: "20 - 40", crt: "Menor a 2", k: 10.0, tempMin: 38.0, tempMax: 39.2 },
  alpaca: { name: "Alpaca", temp: "37.5 - 38.9", hr: "60 - 90", rr: "10 - 30", crt: "Menor a 2", k: 10.0, tempMin: 37.5, tempMax: 38.9 },
  llama: { name: "Llama", temp: "37.5 - 38.9", hr: "60 - 90", rr: "10 - 30", crt: "Menor a 2", k: 10.0, tempMin: 37.5, tempMax: 38.9 },
  bovine: { name: "Bovino", temp: "38.0 - 39.0", hr: "40 - 80", rr: "10 - 30", crt: "Menor a 2", k: 10.5, tempMin: 38.0, tempMax: 39.0 },
  ovine: { name: "Ovino", temp: "38.5 - 40.0", hr: "70 - 90", rr: "12 - 20", crt: "Menor a 2", k: 10.0, tempMin: 38.5, tempMax: 40.0 },
  caprine: { name: "Caprino", temp: "38.5 - 40.0", hr: "70 - 90", rr: "12 - 20", crt: "Menor a 2", k: 10.0, tempMin: 38.5, tempMax: 40.0 },
  equine: { name: "Equino", temp: "37.2 - 38.3", hr: "28 - 44", rr: "8 - 16", crt: "Menor a 2", k: 10.5, tempMin: 37.2, tempMax: 38.3 },
  cuy: { name: "Cuyo / Cobayo", temp: "37.2 - 39.5", hr: "230 - 380", rr: "42 - 104", crt: "Menor a 2", k: 9.9, tempMin: 37.2, tempMax: 39.5 },
  rabbit: { name: "Conejo", temp: "38.5 - 40.0", hr: "130 - 325", rr: "30 - 60", crt: "Menor a 2", k: 9.9, tempMin: 38.5, tempMax: 40.0 }
};

// Base de datos para autocompletado en el Vademécum
const drugDatabase = {
  meloxicam: { dose: 0.2, concentration: 5, group: "AINE" },
  ketoprofeno: { dose: 2, concentration: 10, group: "AINE" },
  carprofeno: { dose: 4.4, concentration: 50, group: "AINE" },
  dipirona: { dose: 25, concentration: 500, group: "Analgésico" },
  tramadol: { dose: 3, concentration: 50, group: "Opiáceo" },
  buprenorfina: { dose: 0.02, concentration: 0.3, group: "Opiáceo" },
  fentanilo: { dose: 0.005, concentration: 0.05, group: "Opiáceo" },
  morfina: { dose: 0.5, concentration: 10, group: "Opiáceo" },
  ampicilina: { dose: 20, concentration: 100, group: "Antibiótico" },
  cefazolina: { dose: 20, concentration: 100, group: "Antibiótico" },
  ceftriaxona: { dose: 25, concentration: 100, group: "Antibiótico" },
  enrofloxacina: { dose: 5, concentration: 50, group: "Antibiótico" },
  metronidazol: { dose: 15, concentration: 5, group: "Antibiótico" },
  gentamicina: { dose: 6.6, concentration: 40, group: "Antibiótico" },
  amoxiclav: { dose: 12.5, concentration: 100, group: "Antibiótico" },
  marbofloxacina: { dose: 2.7, concentration: 10, group: "Antibiótico" },
  oxitetraciclina: { dose: 20, concentration: 200, group: "Antibiótico" },
  propofol: { dose: 6, concentration: 10, group: "Anestésico" },
  midazolam: { dose: 0.2, concentration: 5, group: "Sedante" },
  diazepam: { dose: 0.5, concentration: 5, group: "Anticonvulsivante" },
  ketamina: { dose: 5, concentration: 100, group: "Anestésico" },
  dexmedetomidina: { dose: 0.005, concentration: 0.5, group: "Sedante" },
  acepromacina: { dose: 0.03, concentration: 10, group: "Sedante" },
  xilacina: { dose: 1, concentration: 20, group: "Sedante" },
  fenobarbital: { dose: 3, concentration: 60, group: "Anticonvulsivante" },
  maropitant: { dose: 1, concentration: 10, group: "Antiemético" },
  ondansetron: { dose: 0.5, concentration: 2, group: "Antiemético" },
  metoclopramida: { dose: 0.5, concentration: 5, group: "Procinético" },
  ranitidina: { dose: 2, concentration: 25, group: "Antiácido" },
  famotidina: { dose: 0.5, concentration: 10, group: "Antiácido" },
  omeprazol: { dose: 1, concentration: 4, group: "Antiácido" },
  dexametasona: { dose: 0.1, concentration: 2, group: "Corticoide" },
  hidrocortisona: { dose: 5, concentration: 50, group: "Corticoide" },
  prednisolona: { dose: 1, concentration: 40, group: "Corticoide" },
  furosemida: { dose: 2, concentration: 50, group: "Diurético" },
  aminofilina: { dose: 10, concentration: 25, group: "Broncodilatador" }
};

// ==========================================
// FUNCIÓN GLOBAL DE CAMBIO DE PESTAÑA (TAB)
// ==========================================
function switchTab(tabId, evt) {
  if (evt) evt.preventDefault();

  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));

  const targetContent = document.getElementById(`tab-${tabId}`);
  if (targetContent) targetContent.classList.add('active');

  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
  }
}

// ==========================================
// INICIALIZACIÓN CUANDO EL DOM ESTÁ LISTO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. RELOJ Y FECHA EN TIEMPO REAL ---
  function updateHeaderClock() {
    const clockEl = document.getElementById('headerClock');
    const dateEl = document.getElementById('headerDate');
    if (!clockEl || !dateEl) return;

    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('es-PE', { hour12: false });
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('es-PE', options).toUpperCase();
  }
  setInterval(updateHeaderClock, 1000);
  updateHeaderClock();

  // --- 2. GESTOR DE TEMAS PALETA DINÁMICA ---
  const themeSelector = document.getElementById('themeSelector');
  if (themeSelector) {
    const savedTheme = localStorage.getItem('appThemeMode') || 'navy';
    document.body.setAttribute('data-theme', savedTheme);
    themeSelector.value = savedTheme;

    themeSelector.addEventListener('change', (e) => {
      const selectedTheme = e.target.value;
      document.body.setAttribute('data-theme', selectedTheme);
      localStorage.setItem('appThemeMode', selectedTheme);
    });
  }

  // --- 3. SINCRONIZACIÓN AUTOMÁTICA DE PESO Y SUPERFICIE CORPORAL ---
  const weightInputs = ['patWeightMaster', 'weight', 'transWeight', 'drugWeight', 'criWeight', 'anesWeight', 'cprWeight', 'toxWeight', 'uciWeight', 'nutrWeight'];

  weightInputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', (e) => {
        const val = e.target.value;
        localStorage.setItem('patientWeight', val);
        
        weightInputs.forEach(otherId => {
          if (otherId !== id) {
            const otherInput = document.getElementById(otherId);
            if (otherInput) otherInput.value = val;
          }
        });

        calculateBSA();
      });
    }
  });

  function calculateBSA() {
    const masterInput = document.getElementById('patWeightMaster');
    const speciesSelect = document.getElementById('patSpecies');
    const resBSAEl = document.getElementById('resBSA');
    
    if (!masterInput || !speciesSelect || !resBSAEl) return;

    const weight = parseFloat(masterInput.value) || 0;
    const speciesKey = speciesSelect.value;
    const data = speciesPhysiology[speciesKey] || speciesPhysiology.canine;

    if (weight <= 0) {
      resBSAEl.textContent = "0.000";
      return;
    }

    const bsa = (data.k * Math.pow(weight, 2/3)) / 100;
    resBSAEl.textContent = bsa.toFixed(3);
  }

  function updateSpeciesData() {
    const speciesSelect = document.getElementById('patSpecies');
    if (!speciesSelect) return;

    const speciesKey = speciesSelect.value;
    const data = speciesPhysiology[speciesKey] || speciesPhysiology.canine;

    if (document.getElementById('lblSpeciesRef')) document.getElementById('lblSpeciesRef').textContent = data.name;
    if (document.getElementById('refTemp')) document.getElementById('refTemp').textContent = data.temp;
    if (document.getElementById('refHR')) document.getElementById('refHR').textContent = data.hr;
    if (document.getElementById('refRR')) document.getElementById('refRR').textContent = data.rr;
    if (document.getElementById('refCRT')) document.getElementById('refCRT').textContent = data.crt;

    calculateBSA();
    evaluateTriage();
  }

  const patSpeciesEl = document.getElementById('patSpecies');
  if (patSpeciesEl) patSpeciesEl.addEventListener('change', updateSpeciesData);

  function evaluateTriage() {
    const speciesSelect = document.getElementById('patSpecies');
    const tempInput = document.getElementById('vTemp');
    const statusEl = document.getElementById('triageStatus');

    if (!speciesSelect || !tempInput || !statusEl) return;

    const speciesKey = speciesSelect.value;
    const data = speciesPhysiology[speciesKey] || speciesPhysiology.canine;
    const temp = parseFloat(tempInput.value);

    if (isNaN(temp)) {
      statusEl.textContent = "Ingresa la temperatura para evaluar el estado.";
      statusEl.style.color = "var(--text-secondary)";
      return;
    }

    if (temp < data.tempMin) {
      statusEl.textContent = `Hipotermia (${temp} °C < menor a ${data.tempMin} °C)`;
      statusEl.style.color = "var(--danger-color)";
    } else if (temp > data.tempMax) {
      statusEl.textContent = `Fiebre / Hipertermia (${temp} °C > mayor a ${data.tempMax} °C)`;
      statusEl.style.color = "var(--danger-color)";
    } else {
      statusEl.textContent = `Normotermia (${temp} °C dentro del rango normal)`;
      statusEl.style.color = "var(--unamba-green)";
    }
  }

  const vTempEl = document.getElementById('vTemp');
  if (vTempEl) vTempEl.addEventListener('input', evaluateTriage);

  // --- 4. GUARDAR, CARGAR Y LIMPIAR FICHA PACIENTE ---
  const btnSave = document.getElementById('btnSavePatient');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const patientData = {
        name: document.getElementById('patName').value,
        owner: document.getElementById('patOwner').value,
        species: document.getElementById('patSpecies').value,
        breed: document.getElementById('patBreed').value,
        sex: document.getElementById('patSex').value,
        weight: document.getElementById('patWeightMaster').value,
        temp: document.getElementById('vTemp').value,
        hr: document.getElementById('vHR').value,
        rr: document.getElementById('vRR').value,
        notes: document.getElementById('patNotes').value
      };
      localStorage.setItem('savedPatientRecord', JSON.stringify(patientData));
      alert('✅ Ficha del paciente guardada exitosamente.');
    });
  }

  const btnLoad = document.getElementById('btnLoadPatient');
  if (btnLoad) {
    btnLoad.addEventListener('click', () => {
      const saved = localStorage.getItem('savedPatientRecord');
      if (!saved) {
        alert('⚠️ No hay ningún paciente guardado en el sistema.');
        return;
      }
      const p = JSON.parse(saved);
      if (document.getElementById('patName')) document.getElementById('patName').value = p.name || '';
      if (document.getElementById('patOwner')) document.getElementById('patOwner').value = p.owner || '';
      if (document.getElementById('patSpecies')) document.getElementById('patSpecies').value = p.species || 'canine';
      if (document.getElementById('patBreed')) document.getElementById('patBreed').value = p.breed || '';
      if (document.getElementById('patSex')) document.getElementById('patSex').value = p.sex || 'M';
      if (document.getElementById('patWeightMaster')) {
        document.getElementById('patWeightMaster').value = p.weight || '';
        document.getElementById('patWeightMaster').dispatchEvent(new Event('input'));
      }
      if (document.getElementById('vTemp')) document.getElementById('vTemp').value = p.temp || '';
      if (document.getElementById('vHR')) document.getElementById('vHR').value = p.hr || '';
      if (document.getElementById('vRR')) document.getElementById('vRR').value = p.rr || '';
      if (document.getElementById('patNotes')) document.getElementById('patNotes').value = p.notes || '';

      updateSpeciesData();
      alert('✅ Datos del paciente cargados correctamente.');
    });
  }

  const btnClear = document.getElementById('btnClearPatient');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (confirm('¿Deseas limpiar todos los campos del paciente actual?')) {
        const inputsToClear = ['patName', 'patOwner', 'patBreed', 'patNotes', 'vTemp', 'vHR', 'vRR', 'vCRT'];
        inputsToClear.forEach(id => {
          if (document.getElementById(id)) document.getElementById(id).value = '';
        });
        
        weightInputs.forEach(id => {
          if (document.getElementById(id)) document.getElementById(id).value = '';
        });

        if (document.getElementById('triageStatus')) {
          document.getElementById('triageStatus').textContent = 'Sin datos suficientes de constantes';
          document.getElementById('triageStatus').style.color = 'var(--text-secondary)';
        }
        if (document.getElementById('resBSA')) document.getElementById('resBSA').textContent = '0.000';
      }
    });
  }

  // --- 5. EXPORTACIÓN A PDF ---
  function generatePDF(elementId, filenamePrefix) {
    const activeTab = document.querySelector('.tab-content.active .card');
    const elementToPrint = activeTab || document.getElementById(elementId);

    if (!elementToPrint) {
      alert("No se encontró contenido activo para exportar.");
      return;
    }

    if (typeof html2pdf === 'undefined') {
      alert('📄 Generando vista previa de impresión...');
      window.print();
      return;
    }

    const patName = document.getElementById('patName') ? document.getElementById('patName').value : 'UNAMBA';
    
    const opt = {
      margin:       [0.3, 0.3, 0.3, 0.3],
      filename:     `${filenamePrefix}_${patName || 'Paciente'}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, scrollY: 0 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(elementToPrint).save().catch(err => {
      console.error("Error al generar PDF:", err);
      window.print();
    });
  }

  const btnExportPDF = document.getElementById('btnExportPDF');
  if (btnExportPDF) {
    btnExportPDF.addEventListener('click', () => generatePDF('printable-area', 'Ficha_Clinica'));
  }

  const btnExportRxPDF = document.getElementById('btnExportRxPDF');
  if (btnExportRxPDF) {
    btnExportRxPDF.addEventListener('click', () => {
      const vetName = document.getElementById('rxVet').value;
      const vetCol = document.getElementById('rxColegiatura').value;
      if (document.getElementById('printVetName')) document.getElementById('printVetName').textContent = vetName || "Firma Médico";
      if (document.getElementById('printVetCol')) document.getElementById('printVetCol').textContent = vetCol || "C.M.V.P.";
      
      generatePDF('tab-receta', 'Receta_Medica');
    });
  }

  // --- 6. FLUIDOTERAPIA ---
  const btnFluid = document.getElementById('btnCalculateFluid');
  if (btnFluid) {
    btnFluid.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('weight').value) || 0;
      const dehydration = parseFloat(document.getElementById('dehydration').value) || 0;
      const maintenance = parseFloat(document.getElementById('maintenance').value) || 50;
      const losses = parseFloat(document.getElementById('losses').value) || 0;
      const dropFactor = parseFloat(document.getElementById('dropFactor').value) || 20;

      if (weight <= 0) { alert("Ingresa un peso válido."); return; }

      const deficitMl = weight * dehydration * 10;
      const maintenanceMl = weight * maintenance;
      const totalVolume = deficitMl + maintenanceMl + losses;
      const mlPerHour = totalVolume / 24;
      const dropsPerMinute = (mlPerHour * dropFactor) / 60;
      const secondsPerDrop = dropsPerMinute > 0 ? 60 / dropsPerMinute : 0;

      document.getElementById('resDeficit').textContent = Math.round(deficitMl);
      document.getElementById('resTotalVol').textContent = Math.round(totalVolume);
      document.getElementById('resMlHour').textContent = mlPerHour.toFixed(1);
      document.getElementById('resGpm').textContent = Math.round(dropsPerMinute);
      document.getElementById('resSecDrop').textContent = secondsPerDrop.toFixed(1);
      document.getElementById('fluidResults').classList.remove('hidden');
    });
  }

  // --- 7. TRANSFUSIÓN Y OSMOLARIDAD ---
  const btnTrans = document.getElementById('btnCalculateTransfusion');
  if (btnTrans) {
    btnTrans.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('transWeight').value) || 0;
      const currentHt = parseFloat(document.getElementById('transCurrentHt').value) || 0;
      const targetHt = parseFloat(document.getElementById('transTargetHt').value) || 0;
      const donorHt = parseFloat(document.getElementById('transDonorHt').value) || 45;
      const product = document.getElementById('transProduct').value;

      if (weight <= 0 || targetHt <= currentHt) {
        alert("Por favor verifica los valores de peso y hematocrito.");
        return;
      }

      let volume = 0;
      if (product === 'wholeCanine') {
        volume = weight * 90 * ((targetHt - currentHt) / donorHt);
      } else if (product === 'wholeFeline') {
        volume = weight * 66 * ((targetHt - currentHt) / donorHt);
      } else {
        volume = weight * 1.5 * (targetHt - currentHt);
      }

      const rateInitial = weight * 0.5;

      document.getElementById('resTransVol').textContent = Math.round(volume);
      document.getElementById('resTransRateInit').textContent = rateInitial.toFixed(1);
      document.getElementById('transfusionResults').classList.remove('hidden');
    });
  }

  const btnOsm = document.getElementById('btnCalculateOsm');
  if (btnOsm) {
    btnOsm.addEventListener('click', () => {
      const na = parseFloat(document.getElementById('osmNa').value) || 0;
      const k = parseFloat(document.getElementById('osmK').value) || 0;
      const glu = parseFloat(document.getElementById('osmGlu').value) || 0;
      const bun = parseFloat(document.getElementById('osmBUN').value) || 0;

      const osm = (2 * (na + k)) + (glu / 18) + (bun / 2.8);

      document.getElementById('resOsmValue').textContent = osm.toFixed(1);
      document.getElementById('osmResults').classList.remove('hidden');
    });
  }

  // --- 8. BUSCADOR Y VADEMÉCUM ---
  const drugSearchInput = document.getElementById('drugSearch');
  const drugSelect = document.getElementById('drugPreset');

  if (drugSearchInput && drugSelect) {
    drugSearchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const options = drugSelect.querySelectorAll('option');

      options.forEach(opt => {
        if (!opt.value) return;
        const text = opt.textContent.toLowerCase();
        opt.style.display = text.includes(term) ? '' : 'none';
      });
    });
  }

  if (drugSelect) {
    drugSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      const warnBox = document.getElementById('drugInteractionWarning');
      const msgSpan = document.getElementById('interactionMsg');

      if (selected && drugDatabase[selected]) {
        document.getElementById('dose').value = drugDatabase[selected].dose;
        document.getElementById('concentration').value = drugDatabase[selected].concentration;

        if (drugDatabase[selected].group === "AINE") {
          warnBox.classList.remove('hidden');
          msgSpan.textContent = "No combinar AINEs con Corticoides (alto riesgo de úlcera gastrointestinal).";
        } else if (drugDatabase[selected].group === "Corticoide") {
          warnBox.classList.remove('hidden');
          msgSpan.textContent = "Asegurar periodo de lavado antes de administrar con AINEs.";
        } else {
          warnBox.classList.add('hidden');
        }
      }
    });
  }

  const btnDrug = document.getElementById('btnCalculateDrug');
  if (btnDrug) {
    btnDrug.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('drugWeight').value) || 0;
      const dose = parseFloat(document.getElementById('dose').value) || 0;
      const concentration = parseFloat(document.getElementById('concentration').value) || 0;

      if (weight <= 0 || concentration <= 0) { alert("Ingresa valores válidos."); return; }

      const totalMg = weight * dose;
      const volumeMl = totalMg / concentration;

      document.getElementById('resTotalMg').textContent = totalMg.toFixed(2);
      document.getElementById('resVolMl').textContent = volumeMl.toFixed(2);
      document.getElementById('drugResults').classList.remove('hidden');
    });
  }

  // --- 9. CRI (INFUSIÓN CONTINUA) ---
  const btnCRI = document.getElementById('btnCalculateCRI');
  if (btnCRI) {
    btnCRI.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('criWeight').value) || 0;
      const fluidRate = parseFloat(document.getElementById('criFluidRate').value) || 0;
      const bagVol = parseFloat(document.getElementById('criBagVolume').value) || 500;
      const drugRateMcg = parseFloat(document.getElementById('criDrugRate').value) || 0;
      const drugConcMgMl = parseFloat(document.getElementById('criDrugConc').value) || 0;

      if (weight <= 0 || fluidRate <= 0 || drugConcMgMl <= 0) { alert("Completa los campos obligatorios."); return; }

      const hourlyMgNeeded = (drugRateMcg * weight * 60) / 1000;
      const hoursPerBag = bagVol / fluidRate;
      const totalMgInBag = hourlyMgNeeded * hoursPerBag;
      const drugMlToAdd = totalMgInBag / drugConcMgMl;

      document.getElementById('resCriHourlyMg').textContent = hourlyMgNeeded.toFixed(2);
      document.getElementById('resCriBagLabel').textContent = bagVol;
      document.getElementById('resCriDrugMl').textContent = drugMlToAdd.toFixed(2);
      document.getElementById('criResults').classList.remove('hidden');
    });
  }

  // --- 10. ANESTESIA Y RCP ---
  const btnAnes = document.getElementById('btnCalculateAnesthesia');
  if (btnAnes) {
    btnAnes.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('anesWeight').value) || 0;
      if (weight <= 0) { alert("Ingresa un peso válido."); return; }

      const tidalVolumeMin = weight * 10;
      const tidalVolumeMax = weight * 15;
      const bagSizeLitersNeeded = (tidalVolumeMax * 5) / 1000;
      
      let recommendedBag = 0.5;
      if (bagSizeLitersNeeded > 0.5 && bagSizeLitersNeeded <= 1) recommendedBag = 1;
      else if (bagSizeLitersNeeded > 1 && bagSizeLitersNeeded <= 2) recommendedBag = 2;
      else if (bagSizeLitersNeeded > 2 && bagSizeLitersNeeded <= 3) recommendedBag = 3;
      else if (bagSizeLitersNeeded > 3) recommendedBag = 5;

      document.getElementById('resETTube').textContent = weight <= 5 ? "3.5 - 4.5" : "7.0 - 8.5";
      document.getElementById('resTidalVolume').textContent = `${Math.round(tidalVolumeMin)} - ${Math.round(tidalVolumeMax)}`;
      document.getElementById('resBagSize').textContent = recommendedBag;
      document.getElementById('resCircuit').textContent = weight < 7 ? "No reventilatorio" : "Reventilatorio";
      document.getElementById('anesResults').classList.remove('hidden');
    });
  }

  const btnCPR = document.getElementById('btnCalculateCPR');
  if (btnCPR) {
    btnCPR.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('cprWeight').value) || 0;
      if (weight <= 0) { alert("Ingresa un peso válido."); return; }

      document.getElementById('resEpiLow').textContent = `${(weight * 0.01).toFixed(2)} ml`;
      document.getElementById('resEpiHigh').textContent = `${(weight * 0.1).toFixed(2)} ml`;
      document.getElementById('resAtropine').textContent = `${((weight * 0.04)/0.5).toFixed(2)} ml`;
      document.getElementById('resDefibBiphasic').textContent = `${Math.round(weight * 2)} - ${Math.round(weight * 4)}`;
      document.getElementById('resDefibMonophasic').textContent = `${Math.round(weight * 4)} - ${Math.round(weight * 6)}`;
      document.getElementById('cprResults').classList.remove('hidden');
    });
  }

  // --- 11. GASOMETRÍA ---
  const btnGas = document.getElementById('btnCalculateGas');
  if (btnGas) {
    btnGas.addEventListener('click', () => {
      const ph = parseFloat(document.getElementById('gasPH').value);
      const pco2 = parseFloat(document.getElementById('gasPCO2').value);
      const hco3 = parseFloat(document.getElementById('gasHCO3').value);
      const na = parseFloat(document.getElementById('gasNa').value) || 0;
      const k = parseFloat(document.getElementById('gasK').value) || 0;
      const cl = parseFloat(document.getElementById('gasCl').value) || 0;

      if (isNaN(ph) || isNaN(pco2) || isNaN(hco3)) { alert("Ingresa pH, pCO2 y HCO3."); return; }

      let diagnosis = "Normal";
      if (ph < 7.35) diagnosis = hco3 < 22 ? "Acidosis Metabólica" : "Acidosis Respiratoria";
      else if (ph > 7.45) diagnosis = hco3 > 26 ? "Alcalosis Metabólica" : "Alcalosis Respiratoria";

      const anionGap = (na + k) - (cl + hco3);

      document.getElementById('resGasDiagnosis').textContent = diagnosis;
      if (document.getElementById('resAnionGap')) {
        document.getElementById('resAnionGap').textContent = anionGap > 0 ? anionGap.toFixed(1) : "0";
      }
      document.getElementById('gasResults').classList.remove('hidden');
    });
  }

  // --- 12. ADITIVOS Y DILUCIONES ---
  const btnAdditives = document.getElementById('btnCalculateAdditives');
  if (btnAdditives) {
    btnAdditives.addEventListener('click', () => {
      const bagVol = parseFloat(document.getElementById('bagVolume').value) || 500;
      const kLevel = parseFloat(document.getElementById('kclLevel').value) || 0;
      const dextPct = parseFloat(document.getElementById('dextrosePct').value) || 0;

      let meqPerLiter = 20;
      if (kLevel < 2.0) meqPerLiter = 80;
      else if (kLevel < 2.5) meqPerLiter = 60;
      else if (kLevel < 3.0) meqPerLiter = 40;
      else if (kLevel < 3.5) meqPerLiter = 28;

      const totalMeqNeeded = (meqPerLiter * bagVol) / 1000;
      const kclMl = totalMeqNeeded / 2; // 2 mEq/ml
      const dextMl = (dextPct * bagVol) / 50; // Dextrosa al 50%

      document.getElementById('resKclMl').textContent = kclMl.toFixed(1);
      document.getElementById('resMeqLiter').textContent = meqPerLiter;
      document.getElementById('resDextroseMl').textContent = dextMl.toFixed(1);
      document.getElementById('additiveResults').classList.remove('hidden');
    });
  }

  const btnDilution = document.getElementById('btnCalculateDilution');
  if (btnDilution) {
    btnDilution.addEventListener('click', () => {
      const c1 = parseFloat(document.getElementById('dilC1').value) || 0;
      const c2 = parseFloat(document.getElementById('dilC2').value) || 0;
      const v2 = parseFloat(document.getElementById('dilV2').value) || 0;

      if (c1 <= 0 || c2 <= 0 || v2 <= 0 || c2 >= c1) {
        alert("La concentración deseada debe ser menor a la concentración inicial.");
        return;
      }

      const v1 = (c2 * v2) / c1;
      const solvent = v2 - v1;

      document.getElementById('resDilV1').textContent = v1.toFixed(1);
      document.getElementById('resDilSolvent').textContent = solvent.toFixed(1);
      document.getElementById('dilutionResults').classList.remove('hidden');
    });
  }

  // --- 13. TOXICOLOGÍA Y CHOCOLATE ---
  const btnTox = document.getElementById('btnCalculateTox');
  if (btnTox) {
    btnTox.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('toxWeight').value) || 0;
      if (weight <= 0) { alert("Ingresa un peso válido."); return; }

      document.getElementById('resCharcoal').textContent = `${(weight * 1).toFixed(1)} - ${(weight * 2).toFixed(1)}`;
      document.getElementById('resApomorphine').textContent = (weight * 0.03).toFixed(2);
      document.getElementById('resXylazine').textContent = (weight * 0.44 / 20).toFixed(2);
      document.getElementById('resVitK').textContent = (weight * 2.5).toFixed(1);
      document.getElementById('toxResults').classList.remove('hidden');
    });
  }

  const btnChoc = document.getElementById('btnCalculateChoc');
  if (btnChoc) {
    btnChoc.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('patWeightMaster').value || document.getElementById('toxWeight').value) || 0;
      const type = document.getElementById('chocType').value;
      const grams = parseFloat(document.getElementById('chocGrams').value) || 0;

      if (weight <= 0 || grams <= 0) { alert("Ingresa el peso del paciente y la cantidad en gramos."); return; }

      let mgPerGram = 1.5;
      if (type === 'milk') mgPerGram = 2.0;
      else if (type === 'dark') mgPerGram = 7.0;
      else if (type === 'baker') mgPerGram = 18.0;

      const totalMg = grams * mgPerGram;
      const doseMgKg = totalMg / weight;

      let risk = "Bajo (Monitorear gastrointestinal)";
      if (doseMgKg >= 20 && doseMgKg < 40) risk = "Moderado (Sintomatología cardiorrespiratoria ligera)";
      else if (doseMgKg >= 40 && doseMgKg < 60) risk = "Alto (Cardiotoxicidad, taquicardia, arritmia)";
      else if (doseMgKg >= 60) risk = "SEVERO / CRÍTICO (Riesgo de convulsiones y muerte)";

      document.getElementById('resChocDose').textContent = doseMgKg.toFixed(1);
      document.getElementById('resChocRisk').textContent = risk;
      document.getElementById('chocResults').classList.remove('hidden');
    });
  }

  // --- 14. UCI Y NUTRICIÓN ---
  const btnUCI = document.getElementById('btnCalculateUCI');
  if (btnUCI) {
    btnUCI.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('uciWeight').value) || 0;
      const hours = parseFloat(document.getElementById('uciHours').value) || 1;
      const totalUrine = parseFloat(document.getElementById('uciUrine').value) || 0;
      const totalIn = parseFloat(document.getElementById('uciIn').value) || 0;

      if (weight <= 0 || hours <= 0) { alert("Valores inválidos."); return; }

      const diuresisRate = totalUrine / weight / hours;
      let status = "Normuria (1.0 - 2.0 ml/kg/h)";
      if (diuresisRate < 0.5) status = "Oliguria Crítica (< 0.5 ml/kg/h)";
      else if (diuresisRate < 1.0) status = "Oliguria Relativa (0.5 - 1.0 ml/kg/h)";
      else if (diuresisRate > 2.0) status = "Poliuria (> 2.0 ml/kg/h)";

      const netBalance = totalIn - totalUrine;

      document.getElementById('resDiuresis').textContent = diuresisRate.toFixed(2);
      document.getElementById('resDiuresisStatus').textContent = status;
      document.getElementById('resNetBalance').textContent = netBalance.toFixed(1);
      document.getElementById('uciResults').classList.remove('hidden');
    });
  }

  const btnNutr = document.getElementById('btnCalculateNutr');
  if (btnNutr) {
    btnNutr.addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('nutrWeight').value) || 0;
      const factor = parseFloat(document.getElementById('nutrFactor').value) || 1.0;

      if (weight <= 0) { alert("Ingresa un peso válido."); return; }

      const rer = 70 * Math.pow(weight, 0.75);
      document.getElementById('resRER').textContent = Math.round(rer);
      document.getElementById('resMER').textContent = Math.round(rer * factor);
      document.getElementById('nutrResults').classList.remove('hidden');
    });
  }

});