# gsign

Capacitor Google SignIn Plugin

## Install

```bash
npm install gsign
npx cap sync
```

## API

<docgen-index>

* [`signIn(...)`](#signin)
* [`signOut()`](#signout)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### signIn(...)

```typescript
signIn(options: GSignOptions) => Promise<GSignResult>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#gsignoptions">GSignOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#gsignresult">GSignResult</a>&gt;</code>

--------------------


### signOut()

```typescript
signOut() => Promise<void>
```

--------------------


### Interfaces


#### GSignResult

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`idToken`**           | <code>string</code> |
| **`email`**             | <code>string</code> |
| **`displayName`**       | <code>string</code> |
| **`familyName`**        | <code>string</code> |
| **`givenName`**         | <code>string</code> |
| **`profilePictureUri`** | <code>string</code> |


#### GSignOptions

| Prop                 | Type                  |
| -------------------- | --------------------- |
| **`clientId`**       | <code>string</code>   |
| **`serverClientId`** | <code>string</code>   |
| **`scopes`**         | <code>string[]</code> |

</docgen-api>
