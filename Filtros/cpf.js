  //filtro CPF
  filters: {
    cpf (value) {
      const val = value.padStart(11, '0')
      return val.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    },
  },
//filtro CPF
