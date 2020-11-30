  //filtro Dinheiro
  filters: {
  
      dinheiro (value) {
        const val = `R$  ${parseFloat(value).toFixed(2).replace('.', ',')}  ${value === 1 ? 'Real' : 'Reais'}`
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      },
    },
  //filtro Dinheiro
