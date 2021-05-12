## Utility components

### CenterAlign

```jsx
<CenterAlign
    horizontal={true}
    vertical={false}
>
    <p>foobar</p>
</CenterAlign>
```

### Dispay by specific breakpoints

```jsx
<DesktopOnly>Desktop or laptop</DesktopOnly>
<TabletOnly>Tablet</TabletOnly>
<MobileOnly>Mobile</MobileOnly>
```

### PhoneHide

```jsx
<PhoneHide>
    <p>hide this message on mobile device</p>
</PhoneHide>
```

### PhoneShow

```jsx
<PhoneShow>
    <p>only show this message on mobile device</p>
</PhoneShow>
```

### Spacing

```jsx

<Spacing
    padding={'1rem'}
    margin={'1rem'}
>
    <p>add some padding and margin around me</p>
</Spacing>

<Spacing
    padding={'1rem'}
    margin={'1rem'}
>
    <p>add some padding and margin around me</p>
</Spacing>

<Spacing
    paddingTop={'1rem'}
    paddingBottom={'1rem'}
    paddingLeft={'1rem'}
    paddingRight={'1rem'}
    marginTop={'1rem'}
    marginBottom={'1rem'}
    marginLeft={'1rem'}
    marginRight={'1rem'}
>
    <p>add some padding and margin around me</p>
</Spacing>
```