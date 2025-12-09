const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const controlsDiv = document.getElementById('controls');
const predictionsDiv = document.getElementById('predictions');
const phaseTitle = document.getElementById('phaseTitle');

let dataPoints = [
    { x: 15, y: 39 }, { x: 15, y: 81 }, { x: 16, y: 6 }, { x: 16, y: 77 },
    { x: 17, y: 40 }, { x: 17, y: 76 }, { x: 18, y: 6 }, { x: 18, y: 94 },
    { x: 19, y: 3 }, { x: 19, y: 72 }, { x: 19, y: 14 }, { x: 19, y: 99 },
    { x: 20, y: 15 }, { x: 20, y: 77 }, { x: 20, y: 13 }, { x: 20, y: 79 },
    { x: 21, y: 35 }, { x: 21, y: 66 }, { x: 23, y: 29 }, { x: 23, y: 98 },
    { x: 24, y: 35 }, { x: 24, y: 73 }, { x: 25, y: 5 }, { x: 25, y: 73 },
    { x: 28, y: 14 }, { x: 28, y: 82 }, { x: 28, y: 32 }, { x: 28, y: 61 },
    { x: 29, y: 31 }, { x: 29, y: 87 }, { x: 30, y: 4 }, { x: 30, y: 73 },
    { x: 33, y: 4 }, { x: 33, y: 92 }, { x: 33, y: 14 }, { x: 33, y: 81 },
    { x: 34, y: 17 }, { x: 34, y: 73 }, { x: 37, y: 26 }, { x: 37, y: 75 },
    { x: 38, y: 35 }, { x: 38, y: 92 }, { x: 39, y: 36 }, { x: 39, y: 61 },
    { x: 39, y: 28 }, { x: 39, y: 65 }, { x: 40, y: 55 }, { x: 40, y: 47 },
    { x: 40, y: 42 }, { x: 40, y: 42 }, { x: 42, y: 52 }, { x: 42, y: 60 },
    { x: 43, y: 54 }, { x: 43, y: 60 }, { x: 43, y: 45 }, { x: 43, y: 41 },
    { x: 44, y: 50 }, { x: 44, y: 46 }, { x: 46, y: 51 }, { x: 46, y: 46 },
    { x: 46, y: 56 }, { x: 46, y: 55 }, { x: 47, y: 52 }, { x: 47, y: 59 },
    { x: 48, y: 51 }, { x: 48, y: 59 }, { x: 48, y: 50 }, { x: 48, y: 48 },
    { x: 48, y: 59 }, { x: 48, y: 47 }, { x: 49, y: 55 }, { x: 49, y: 42 },
    { x: 50, y: 49 }, { x: 50, y: 56 }, { x: 54, y: 47 }, { x: 54, y: 54 },
    { x: 54, y: 53 }, { x: 54, y: 48 }, { x: 54, y: 52 }, { x: 54, y: 42 },
    { x: 54, y: 51 }, { x: 54, y: 55 }, { x: 54, y: 41 }, { x: 54, y: 44 },
    { x: 54, y: 57 }, { x: 54, y: 46 }, { x: 57, y: 58 }, { x: 57, y: 55 },
    { x: 58, y: 60 }, { x: 58, y: 46 }, { x: 59, y: 55 }, { x: 59, y: 41 },
    { x: 60, y: 49 }, { x: 60, y: 40 }, { x: 60, y: 42 }, { x: 60, y: 52 },
    { x: 60, y: 47 }, { x: 60, y: 50 }, { x: 61, y: 42 }, { x: 61, y: 49 },
    { x: 62, y: 41 }, { x: 62, y: 48 }, { x: 62, y: 59 }, { x: 62, y: 55 },
    { x: 62, y: 56 }, { x: 62, y: 42 }, { x: 63, y: 50 }, { x: 63, y: 46 },
    { x: 63, y: 43 }, { x: 63, y: 48 }, { x: 63, y: 52 }, { x: 63, y: 54 },
    { x: 64, y: 42 }, { x: 64, y: 46 }, { x: 65, y: 48 }, { x: 65, y: 50 },
    { x: 65, y: 43 }, { x: 65, y: 59 }, { x: 67, y: 43 }, { x: 67, y: 57 },
    { x: 67, y: 56 }, { x: 67, y: 40 }, { x: 69, y: 58 }, { x: 69, y: 91 },
    { x: 70, y: 29 }, { x: 70, y: 77 }, { x: 71, y: 35 }, { x: 71, y: 95 },
    { x: 71, y: 11 }, { x: 71, y: 75 }, { x: 71, y: 9 }, { x: 71, y: 75 },
    { x: 72, y: 34 }, { x: 72, y: 71 }, { x: 73, y: 5 }, { x: 73, y: 88 },
    { x: 73, y: 7 }, { x: 73, y: 73 }, { x: 74, y: 10 }, { x: 74, y: 72 },
    { x: 75, y: 5 }, { x: 75, y: 93 }, { x: 76, y: 40 }, { x: 76, y: 87 },
    { x: 77, y: 12 }, { x: 77, y: 97 }, { x: 77, y: 36 }, { x: 77, y: 74 },
    { x: 78, y: 22 }, { x: 78, y: 90 }, { x: 78, y: 17 }, { x: 78, y: 88 },
    { x: 78, y: 20 }, { x: 78, y: 76 }, { x: 78, y: 16 }, { x: 78, y: 89 },
    { x: 78, y: 1 }, { x: 78, y: 78 }, { x: 78, y: 1 }, { x: 78, y: 73 },
    { x: 79, y: 35 }, { x: 79, y: 83 }, { x: 81, y: 5 }, { x: 81, y: 93 },
    { x: 85, y: 26 }, { x: 85, y: 75 }, { x: 86, y: 20 }, { x: 86, y: 95 },
    { x: 87, y: 27 }, { x: 87, y: 63 }, { x: 87, y: 13 }, { x: 87, y: 75 },
    { x: 87, y: 10 }, { x: 87, y: 92 }, { x: 88, y: 13 }, { x: 88, y: 86 },
    { x: 88, y: 15 }, { x: 88, y: 69 }, { x: 93, y: 14 }, { x: 93, y: 90 },
    { x: 97, y: 32 }, { x: 97, y: 86 }, { x: 98, y: 15 }, { x: 98, y: 88 },
    { x: 99, y: 39 }, { x: 99, y: 97 }, { x: 101, y: 24 }, { x: 101, y: 68 },
    { x: 103, y: 17 }, { x: 103, y: 85 }, { x: 103, y: 23 }, { x: 103, y: 69 },
    { x: 113, y: 8 }, { x: 113, y: 91 }, { x: 120, y: 16 }, { x: 120, y: 79 },
    { x: 126, y: 28 }, { x: 126, y: 74 }, { x: 137, y: 18 }, { x: 137, y: 83 }
];

const k = 5; // Number of clusters
let centroids = [];
let clusters = [];
const colors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1']; // Stylish pastel colors

document.getElementById('collectDataBtn').addEventListener('click', handleCollectData);

// Load face image
const faceImg = new Image();
faceImg.src = 'face.png';

function drawAxes() {
    const width = canvas.width;
    const height = canvas.height;

    // Set fixed axis ranges
    const minX = 0;
    const maxX = 150;
    const minY = 0;
    const maxY = 150;

    // Calculate scaling factors
    const xStep = (width - 100) / (maxX - minX);
    const yStep = (height - 100) / (maxY - minY);

    // Draw x-axis
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, height - 50);
    ctx.lineTo(width - 50, height - 50);
    ctx.stroke();

    // Draw y-axis
    ctx.beginPath();
    ctx.moveTo(50, height - 50);
    ctx.lineTo(50, 50);
    ctx.stroke();

    // Draw grid lines and labels
    ctx.strokeStyle = 'lightgray';
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';

    // Horizontal grid lines
    for (let i = minY; i <= maxY; i += 10) {
        const y = height - 50 - (i - minY) * yStep;
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(width - 50, y);
        ctx.stroke();
        ctx.fillText(i, 30, y + 5);
    }

    // Vertical grid lines
    for (let i = minX; i <= maxX; i += 10) {
        const x = 50 + (i - minX) * xStep;
        ctx.beginPath();
        ctx.moveTo(x, 50);
        ctx.lineTo(x, height - 50);
        ctx.stroke();
        ctx.fillText(i, x - 5, height - 30);
    }

    // Draw x-axis label
    ctx.fillText('Jahreseinkommen (Annual Income)', width / 2 - 30, height - 10);

    // Draw y-axis label
    ctx.save();
    ctx.translate(10, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Ausgabenscore (Spending Score)', -50, 0);
    ctx.restore();
}

function drawDataPoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawAxes(); // Redraw axes

    // Set fixed axis ranges
    const minX = 0;
    const maxX = 150;
    const minY = 0;
    const maxY = 150;

    // Calculate scaling factors
    const width = canvas.width;
    const height = canvas.height;
    const xStep = (width - 100) / (maxX - minX);
    const yStep = (height - 100) / (maxY - minY);

    // Draw data points
    dataPoints.forEach((point, index) => {
        const x = 50 + (point.x - minX) * xStep;
        const y = height - 50 - (point.y - minY) * yStep;
        const color = clusters[index] !== undefined ? colors[clusters[index]] : 'black';
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    });

    // Draw centroids as larger, bolder "X" and add labels
    centroids.forEach((centroid, index) => {
        const x = 50 + (centroid.x - minX) * xStep;
        const y = height - 50 - (centroid.y - minY) * yStep;
        ctx.strokeStyle = colors[index];
        ctx.lineWidth = 4; // Make the lines bolder

        // Draw larger "X"
        ctx.beginPath();
        ctx.moveTo(x - 10, y - 10); // Top-left to bottom-right
        ctx.lineTo(x + 10, y + 10);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x - 10, y + 10); // Bottom-left to top-right
        ctx.lineTo(x + 10, y - 10);
        ctx.stroke();

        // Add cluster label near the centroid
        ctx.fillStyle = 'black'; // Label color
        ctx.font = '14px Arial'; // Label font
        ctx.fillText(`Cluster ${index + 1}`, x + 15, y - 15); // Position label near the centroid
    });
}

let currentIteration = 0; // Track the current iteration
const maxIterations = 7; // Maximum number of iterations

let progressBar = null;

function createProgressBar() {
    // Remove any existing progress bar
    const container = document.getElementById('progressBarContainer');
    if (!container) return;
    container.innerHTML = '';
    // Create a new progress bar
    progressBar = new ProgressBar.Line(container, {
        strokeWidth: 4,
        color: '#6B5B95',
        trailColor: '#eee',
        trailWidth: 4,
        svgStyle: {width: '100%', height: '30px'},
        text: {
            style: {
                color: '#333',
                position: 'absolute',
                right: '0',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FF6F61'},
        to: {color: '#88B04B'},
        step: (state, bar) => {
            bar.setText('');
        }
    });
    progressBar.set(0);
    progressBar.setText('');
}

function handleCollectData() {
    phaseTitle.innerText = 'K-Means Clustering'; // Change title
    clusters = []; // Clear any existing cluster assignments
    drawDataPoints(); // Draw all data points without clusters

    // Add an introduction to K-Means
    controlsDiv.innerHTML = `
        <p>
            Wir sehen in der Grafik nun also die einzelnen Kunden als Datenpunkte repräsentiert.
            <br>
            Zuerst müssen wir festlegen, wie viele Cluster wir erstellen möchten. In diesem Beispiel entscheiden wir uns für <strong>fünf</strong> Cluster.<br>
            Anschließend wählt der Algorithmus zufällig fünf sogenannte Start-Zentroiden. Ein Zentroid soll im Zentrum eines Clusters liegen.<br>
        </p>
        <p>
            Klicke auf „Zentroiden auswählen“, um die Startpunkte festzulegen und das Clustering zu beginnen.
        </p>
        <br>
        <button class="button" id="startClusteringBtn">
            Zentroiden auswählen  
        </button>
    `;

    // Add event listener to start clustering
    document.getElementById('startClusteringBtn').addEventListener('click', startClustering);
}

function startClustering() {
    currentIteration = 0; // Reset iteration counter
    initializeCentroids();
    createProgressBar();
    setupIterationControls();
}

function initializeCentroids() {
    centroids = [
        { x: 20, y: 110 }, // Cluster 1
        { x: 60, y: 80 },  // Cluster 2
        { x: 120, y: 10 }, // Cluster 3
        { x: 140, y: 130 }, // Cluster 4
        { x: 15, y: 20 }   // Cluster 5
    ];

    drawDataPoints(); 
}

function setupIterationControls() {
    // Clear the controlsDiv and add the message first
    const message = document.createElement('p');
    message.innerHTML = `
        Jetzt wird der Algorithmus jeden Datenpunkt dem nächstgelegenen Zentroiden zuweisen.
        <br>
        <i>Im Folgenden werden diese Schritte mehrmals wiederholt, um die Cluster zu perfektionieren.</i>
        <br>
        Klicke auf "Punkte zu Clustern zuweisen", um mit diesem Schritt fortzufahren. 
    `;
    controlsDiv.innerHTML = ''; // Clear previous content
    controlsDiv.appendChild(message); // Add the message

    // Add the "Assign Points to Clusters" button below the message
    const assignClustersBtn = document.createElement('button');
    assignClustersBtn.className = 'button';
    assignClustersBtn.id = 'assignClustersBtn';
    assignClustersBtn.textContent = 'Punkte zu Clustern zuweisen';
    controlsDiv.appendChild(assignClustersBtn);

    // Add event listener for the button
    assignClustersBtn.addEventListener('click', () => {
        assignClusters();
        // Update progress bar
        currentIteration++;
        if (progressBar) {
            progressBar.animate(currentIteration / maxIterations, {
                duration: 500
            });
            progressBar.setText(`Iteration ${currentIteration} of ${maxIterations}`);
        }
        assignClustersBtn.remove(); // Remove the button after clicking
        showUpdateCentroidsButton(); // Show the "Update Centroids" button
    });
}

function showUpdateCentroidsButton() {
    // Clear the controlsDiv and add the message first
    const message = document.createElement('p');
    message.innerHTML = `
        Die Datenpunkte wurden den Clustern zugewiesen.<br>
        Jetzt wird der Algorithmus die neuen Zentroiden berechnen, indem der Durchschnitt der Punkte in jedem Cluster genommen wird. Es wird also jeweils der Mittelwert aus allen x- und y-Koordinaten der Punkte in einem Cluster  genommen und daraus die Koordinaten des neuen Zentroiden berechnet.
        <i>
        Daher hat der Algorithmus auch seinen Namen: K-means für Englisch: Means = Mittelwerte.
        </i>
        <br>
        Klicke auf "Zentroiden aktualisieren", um fortzufahren.<br>
    `;
    controlsDiv.innerHTML = ''; // Clear previous content
    controlsDiv.appendChild(message); // Add the message

    // Add the "Update Centroids" button below the message
    const updateCentroidsBtn = document.createElement('button');
    updateCentroidsBtn.className = 'button';
    updateCentroidsBtn.id = 'updateCentroidsBtn';
    updateCentroidsBtn.textContent = 'Zentroiden aktualisieren';
    controlsDiv.appendChild(updateCentroidsBtn);

    // Add event listener for the button
    updateCentroidsBtn.addEventListener('click', () => {
        updateCentroids();
        updateCentroidsBtn.remove(); // Remove the button after clicking

        if (currentIteration < maxIterations) {
            setupIterationControls(); // Show the "Assign Points to Clusters" button for the next iteration
        } else {
            controlsDiv.innerHTML = `
                <p>
                    <strong>Die Clusterbildung ist abgeschlossen, da sich die Zentren stabilisiert haben oder die von den Datenwissenschaftlern festgelegte maximale Anzahl an Iterationen erreicht wurde.</strong><br>
                    Die Daten wurden in <strong>${k}</strong> Cluster gruppiert.<br>
                    Du kannst die Ergebnisse auf der Grafik sehen.
                </p>
                <br>
                <button class="button" id="finishBtn">Fertig</button>
            `;

            // Add event listener to the "Finish" button
            document.getElementById('finishBtn').addEventListener('click', () => {
                window.location.href = 'end.html'; // Redirect to end.html
            });
        }
    });
}

function assignClusters() {
    clusters = dataPoints.map(point => {
        let minDistance = Infinity;
        let clusterIndex = -1;

        centroids.forEach((centroid, index) => {
            const distance = Math.sqrt(
                Math.pow(point.x - centroid.x, 2) + Math.pow(point.y - centroid.y, 2)
            );
            if (distance < minDistance) {
                minDistance = distance;
                clusterIndex = index;
            }
        });

        return clusterIndex;
    });

    drawDataPoints();
}

function updateCentroids() {
    const newCentroids = centroids.map((_, index) => {
        const clusterPoints = dataPoints.filter((_, i) => clusters[i] === index);
        const xSum = clusterPoints.reduce((sum, point) => sum + point.x, 0);
        const ySum = clusterPoints.reduce((sum, point) => sum + point.y, 0);
        const count = clusterPoints.length;

        return count > 0
            ? { x: xSum / count, y: ySum / count }
            : centroids[index]; // Keep the old centroid if no points are assigned
    });

    centroids = newCentroids;
    drawDataPoints();

    currentIteration++;
    if (currentIteration < maxIterations) {
        setupIterationControls();
    } else {
        
    }
}

// Initial draw when the page loads
drawAxes();
