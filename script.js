document.getElementById('teamInputForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect team numbers
    const blueTeams = [
        document.getElementById('blue-1').value,
        document.getElementById('blue-2').value,
        document.getElementById('blue-3').value,
    ];
    
    const redTeams = [
        document.getElementById('red-1').value,
        document.getElementById('red-2').value,
        document.getElementById('red-3').value,
    ];
    
    // Placeholder: Log the team numbers to console
    console.log('Blue Alliance Teams:', blueTeams);
    console.log('Red Alliance Teams:', redTeams);
    
    // Implement the logic to simulate the match and display results
    // For now, just show a simple message
    document.getElementById('simulationResults').textContent = 'Simulation results will be displayed here.';
});
