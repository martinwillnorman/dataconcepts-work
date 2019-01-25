<template>
  <section class="content-block">
    <div class="container">
      <div class="row">
        <div class="column col-4">
          <div class="content-wrapper">
            <div class="subtitle-wrapper">
              <hr class="subtitle">
              <h6 class="subtitle-header">culture</h6>
            </div>
          </div>
        </div>

        <div class="column col-12">
          <div data-aos="fade-up" data-aos-duration="600" class="content-wrapper culture-wrapper">
            <div class="culture">
              <h1 class="culture-title">Company Benefits</h1>
              <p
                class="culture-text"
              >Our team’s health and wellness is a top priority. We offer fully paid health benefits for all employees. We also pay half for your spouse.</p>
            </div>
            <div class="culture">
              <h1 class="culture-title">Retirement Planning</h1>
              <p
                class="culture-text"
              >Getting old sucks. We try to make it suck less by offering a 2% retirement match for employees who take advantage of our company’s 401K investment plan.</p>
            </div>
            <div class="culture">
              <h1 class="culture-title">Growth</h1>
              <p
                class="culture-text"
              >We want you to develop and learn. Every employee has the opportunity to grow in their role(s) at Data Concepts through hands-on experience, paid learning and workshops.</p>
            </div>
            <div class="culture">
              <h1 class="culture-title">Flexible Hours</h1>
              <p
                class="culture-text"
              >As a consultancy built on creativity and technology, we want you at your best. That's why we work remotely on select days and even adjust our hours depending on life's impromptu moments.</p>
            </div>
            <div class="culture">
              <h1 class="culture-title">Compensation</h1>
              <p
                class="culture-text"
              >We value the members of our team, and pay competitive wages based on position and experience.</p>
            </div>
            <div class="culture">
              <h1 class="culture-title">Paid Time Off</h1>
              <p
                class="culture-text"
              >It’s important to relax and recharge. We offer flexible, paid vacation so you can work on that tan. Not to mention team-wide ‘Happy DC Days' where food and fun are on us.</p>
            </div>
            <div class="culture">
              <h1 class="culture-title">Food & Drink</h1>
              <p
                class="culture-text"
              >The way to happy employees is often through their stomach. We keep our kitchen stocked with drink and snack selections as well as craft coffee to keep you going.</p>
            </div>
            <div class="culture">
              <h1 class="culture-title">Irresistible Culture</h1>
              <p
                class="culture-text"
              >At the risk of sounding cliche, we fight for culture at every turn. Come and enjoy our WEDNESDAY BAGEL tradition. Or, join us for happy hour at our favorite craft beer spots.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Culture"
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.culture-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    padding: 100px 0

.culture
  width: 31%
  max-width: 31%
  flex-basis: 31%
  text-align: center
  margin-bottom: 100px

.culture-title
    text-transform: uppercase
    margin-bottom: 20px
    font:
        size: .9rem

</style>
