document.getElementById('chp').addEventListener('change', function() {
    document.querySelectorAll('table tbody tr').forEach(row => {
      const points = parseInt(row.cells[8].textContent);
      row.style.display = this.checked && points <= 50 ? 'none' : '';
    });
  });
  
