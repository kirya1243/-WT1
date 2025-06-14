<template>
  <section class="subscribe-banner">
    <div class="subscribe-banner__overlay">
      <div class="container">
        <div class="subscribe-banner__content">
          <div class="subscribe-banner__left">
            <img
              class="subscribe-banner__avatar"
              src="/public/images/user.jpg"
              alt="User photo"
            />
            <p class="subscribe-banner__quote">
              "Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
              pulvinar purus condimentum"
            </p>
          </div>

          <div class="subscribe-banner__right">
            <h2 class="subscribe-banner__title">SUBSCRIBE</h2>
            <p class="subscribe-banner__subtitle">
              FOR OUR NEWLETTER AND PROMOTION
            </p>
            <form class="subscribe-banner__form" @submit.prevent>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.subscribe-banner {
  background: url('/public/images/subscribe-bg.jpg') center/cover no-repeat;
  padding: 0;
  min-width: 375px;

  &__overlay {
    background-color: rgba(244, 244, 244, 0.7);
    padding: 30px 0;

    @media (min-width: 768px) {
      padding: 60px 0;
    }
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 16px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;

    @media (min-width: 768px) {
      gap: 40px;
    }

    @media (min-width: 1600px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__left {
    max-width: 400px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      max-width: 450px;
    }

    @media (min-width: 1600px) {
        align-items: flex-start;
        align-items: center;
    }

    .subscribe-banner__avatar {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      object-fit: cover;

      @media (min-width: 768px) {
        width: 80px;
        height: 80px;
      }
    }

    .subscribe-banner__quote {
      font-style: italic;
      color: #333;
      font-size: 14px;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }

  &__right {
    max-width: 500px;
    width: 400px;   

    @media (min-width: 768px) {
      max-width: 600px;
      margin-right: 0;
      text-align: center;
    }

    @media (max-width: 767px) {
      max-width: 600px;
      margin-right: 0;
      text-align: center;
    }

    @media (min-width: 1600px) {
      text-align: right;
      margin-left: auto;
      padding-left: 40px;
      text-align: center;
    }

    .subscribe-banner__title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
      color: #222;

      @media (min-width: 768px) {
        font-size: 24px;
        margin-bottom: 10px;
      }
    }

    .subscribe-banner__subtitle {
      font-size: 12px;
      color: #555;
      margin-bottom: 16px;

      @media (min-width: 768px) {
        font-size: 14px;
        margin-bottom: 20px;
      }
    }

    .subscribe-banner__form {
      display: flex;
      max-width: 300px; 
      width: 100%;
      margin: 0 auto;

  @media (min-width: 1600px) {
    margin: 0 auto; 
  }

  input {
    flex: 1;
    min-width: 0;
    padding: 10px 16px;
    border: none;
    border-radius: 25px 0 0 25px;
    font-size: 12px;
    outline: none;
    background-color: #E1E1E1;

    @media (min-width: 768px) {
      padding: 12px 20px;
      font-size: 14px;
    }
  }

  button {
    flex-shrink: 0;
    padding: 10px 16px;
    background-color: #e05c6e;
    color: white;
    border: none;
    border-radius: 0 25px 25px 0;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 12px;

    @media (min-width: 768px) {
      padding: 12px 20px;
      font-size: 14px;
    }

    &:hover {
      background: rgba(224, 79, 95, 0.5);
    }
  }
}
  }
}
</style>