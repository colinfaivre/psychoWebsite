<template>
  <div>
    <h3 class="section-title">Le cabinet</h3>
    <div class="section-subtitle">- Uniquement sur RDV -</div>
    <div class="table-container">
      <table>
        <tbody>
          <tr>
            <td class="day">mer. </td>
            <td>08:00 - 20:00</td>
          </tr>
          <tr>
            <td class="day">jeu. </td>
            <td>08:00 - 14:00</td>
          </tr>
          <tr>
            <td class="day">ven.</td>
            <td>08:00 - 20:00</td>
          </tr>
          <tr>
            <td class="day">sam.</td>
            <td>08:00 - 13:00</td>
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
