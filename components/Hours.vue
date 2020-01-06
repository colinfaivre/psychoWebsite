<template>
  <div>
    <h3 class="section-title">Horaires</h3>
    <div class="table-container">
      <table>
        <tbody>
          <tr>
            <td class="day">lun. </td>
            <td>07:00 - 18:00</td>
          </tr>
          <tr>
            <td class="day">mar. </td>
            <td>07:00 - 18:00</td>
          </tr>
          <tr>
            <td class="day">mer. </td>
            <td>07:00 - 18:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
.table-container {
  display: flex;
  justify-content: center;
}
table {
  border: 1px solid $secondary;
  padding: 20px;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
}
.day {
  padding-right: 10px;
}
</style>
