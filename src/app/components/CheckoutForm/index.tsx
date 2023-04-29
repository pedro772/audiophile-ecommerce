"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Image from "next/image";

import styles from "./styles.module.scss";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPin: string;
}

export function CheckoutForm() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    setValue("paymentMethod", "eMoney");
  }, [setValue]);

  return (
    <form className={styles.form__container}>
      <fieldset className={styles["fieldset__container--billing"]}>
        <legend className={styles.fieldset__header}>Billing Details</legend>
        <div className={styles.input__container} style={{ gridArea: "name" }}>
          <div className={styles.input__header}>
            <label htmlFor="name" className={styles.input__label}>
              Name
            </label>
            {errors.name && (
              <p className={styles.input__error}>{errors.name.message}</p>
            )}
          </div>
          <input
            type="text"
            id="name"
            placeholder="Alexei Ward"
            className={errors.name ? styles["input--error"] : styles.input}
            {...register("name", {
              required: "Required field",
            })}
          />
        </div>
        <div className={styles.input__container} style={{ gridArea: "email" }}>
          <div className={styles.input__header}>
            <label htmlFor="email" className={styles.input__label}>
              Email Address
            </label>
            {errors.email && (
              <p className={styles.input__error}>{errors.email.message}</p>
            )}
          </div>
          <input
            type="email"
            id="email"
            placeholder="alexeiward@gmail.com"
            className={errors.email ? styles["input--error"] : styles.input}
            {...register("email", {
              pattern: {
                value: /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Wrong format",
              },
              required: "Required field",
            })}
          />
        </div>
        <div className={styles.input__container} style={{ gridArea: "phone" }}>
          <div className={styles.input__header}>
            <label htmlFor="phone" className={styles.input__label}>
              Phone Number
            </label>
            {errors.phone && (
              <p className={styles.input__error}>{errors.phone.message}</p>
            )}
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="+1 202 555-0136"
            className={errors.phone ? styles["input--error"] : styles.input}
            {...register("phone", {
              pattern: {
                value:
                  /^\+?\d{1,3}?[- .]?\(?\d{1,3}\)?[- .]?\d{3,5}[- .]?\d{4}$/,
                message: "Wrong format",
              },
              required: "Required Field",
            })}
          />
        </div>
      </fieldset>

      <fieldset className={styles["fieldset__container--shipping"]}>
        <legend className={styles.fieldset__header}>Shipping Info</legend>
        <div
          className={styles.input__container}
          style={{ gridArea: "address" }}
        >
          <div className={styles.input__header}>
            <label htmlFor="address" className={styles.input__label}>
              Address
            </label>
            {errors.address && (
              <p className={styles.input__error}>{errors.address.message}</p>
            )}
          </div>
          <input
            type="text"
            id="address"
            placeholder="1137 Williams Avenue"
            className={errors.address ? styles["input--error"] : styles.input}
            {...register("address", {
              required: "Required field",
            })}
          />
        </div>
        <div className={styles.input__container} style={{ gridArea: "zip" }}>
          <div className={styles.input__header}>
            <label htmlFor="zipCode" className={styles.input__label}>
              ZIP Code
            </label>
            {errors.zipCode && (
              <p className={styles.input__error}>{errors.zipCode.message}</p>
            )}
          </div>
          <input
            type="text"
            id="zipCode"
            placeholder="10001"
            className={errors.zipCode ? styles["input--error"] : styles.input}
            {...register("zipCode", {
              pattern: {
                value: /^[\w\s-]{3,20}$/,
                message: "Wrong format",
              },
              required: "Required Field",
            })}
          />
        </div>
        <div className={styles.input__container} style={{ gridArea: "city" }}>
          <div className={styles.input__header}>
            <label htmlFor="city" className={styles.input__label}>
              City
            </label>
            {errors.city && (
              <p className={styles.input__error}>{errors.city.message}</p>
            )}
          </div>
          <input
            type="text"
            id="city"
            placeholder="New York"
            className={errors.city ? styles["input--error"] : styles.input}
            {...register("city", {
              required: "Required field",
            })}
          />
        </div>
        <div
          className={styles.input__container}
          style={{ gridArea: "country" }}
        >
          <div className={styles.input__header}>
            <label htmlFor="country" className={styles.input__label}>
              Country
            </label>
            {errors.country && (
              <p className={styles.input__error}>{errors.country.message}</p>
            )}
          </div>
          <input
            type="text"
            id="country"
            placeholder="United States"
            className={errors.country ? styles["input--error"] : styles.input}
            {...register("country", {
              required: "Required field",
            })}
          />
        </div>
      </fieldset>

      <fieldset className={styles.payment__container}>
        <legend className={styles.fieldset__header}>Payment Details</legend>
        <div className={styles.payment__methods}>
          <label className={styles.input__label} style={{ gridArea: "method" }}>
            Payment Method
          </label>
          <label
            htmlFor="eMoney"
            className={
              watch().paymentMethod === "cash"
                ? styles.checkout__radio
                : styles["checkout__radio--checked"]
            }
            style={{ gridArea: "eMoney" }}
          >
            <input
              {...register("paymentMethod")}
              type="radio"
              id="eMoney"
              value="eMoney"
              checked={watch().paymentMethod === "eMoney"}
              className={styles["input--radio"]}
            />
            e-Money
          </label>

          <label
            htmlFor="cash"
            className={
              watch().paymentMethod === "eMoney"
                ? styles.checkout__radio
                : styles["checkout__radio--checked"]
            }
            style={{ gridArea: "cash" }}
          >
            <input
              {...register("paymentMethod")}
              type="radio"
              id="cash"
              value="cash"
              checked={watch().paymentMethod === "cash"}
              className={styles["input--radio"]}
            />
            Cash on Delivery
          </label>
        </div>

        {watch().paymentMethod === "eMoney" ? (
          <div className={styles["payment__container--e-money"]}>
            <div className={styles.input__container}>
              <div className={styles.input__header}>
                <label htmlFor="eMoneyNumber" className={styles.input__label}>
                  e-Money Number
                </label>
                {errors.eMoneyNumber && (
                  <p className={styles.input__error}>
                    {errors.eMoneyNumber.message}
                  </p>
                )}
              </div>
              <input
                type="number"
                id="eMoneyNumber"
                placeholder="238521993"
                className={
                  errors.eMoneyNumber ? styles["input--error"] : styles.input
                }
                {...register("eMoneyNumber", {
                  required: "Required Field",
                })}
              />
            </div>

            <div className={styles.input__container}>
              <div className={styles.input__header}>
                <label htmlFor="eMoneyPin" className={styles.input__label}>
                  e-Money PIN
                </label>
                {errors.eMoneyPin && (
                  <p className={styles.input__error}>
                    {errors.eMoneyPin.message}
                  </p>
                )}
              </div>
              <input
                type="number"
                id="eMoneyPin"
                placeholder="6891"
                className={
                  errors.eMoneyPin ? styles["input--error"] : styles.input
                }
                {...register("eMoneyPin", {
                  required: "Required Field",
                })}
              />
            </div>
          </div>
        ) : (
          <div className={styles["payment__container--cash"]}>
            <Image
              src={"/assets/checkout/icon-cash-on-delivery.svg"}
              alt="An icon representing taking money off a wallet"
              width={48}
              height={48}
            />
            <p className={styles["payment__method--description"]}>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </fieldset>
    </form>
  );
}
