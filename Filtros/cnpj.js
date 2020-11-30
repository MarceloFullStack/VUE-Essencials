  //filtro CNPJ
  filters: {
   cnpj (value) {
        const val = value.padStart(14, '0')
        return val.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
      },
  },
//filtro CNPJ
