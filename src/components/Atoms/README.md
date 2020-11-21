## Atoms components

Inspired by this [article](https://atomicdesign.bradfrost.com/chapter-2/), the Atom Components are foundational building blocks that comprise all other components, these atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.

### [CalciteGrid](http://esri.github.io/calcite-web/documentation/grid/#container)
```jsx
<CalciteGrid 
    column={12} 
    centerColumn={true}
>
    <p>foobar</p>
</CalciteGrid>
```

### CalciteLink
```jsx
<CalciteLink
    href='//esri.com' 
    text='esri'
    color='light-blue'
/>
```

### [CalciteLoader](http://esri.github.io/calcite-web/documentation/components/#loader)
```jsx
<CalciteLoader
    message='loading...'
/>
```

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