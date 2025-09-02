# Shadcn Builder Patterns

**Shadcn Builder Patterns** is a foundational React library designed to accelerate development by providing reusable, customizable modules for building modern web apps. It includes a Form Builder and DataTable Builder, with built-in support for the shadcn/ui component library.

## Features

- 🚀 **Form Builder**: Create complex, dynamic forms with ease.
- 📊 **DataTable Builder**: Build customizable, responsive data tables.
- 🎨 **shadcn/ui Integration**: Styled with Tailwind CSS and shadcn components for consistency and speed.
- 🧱 Modular & Extensible: Easily extend or adapt modules across different projects.

## Usage

Install and import the library in your React project:

```bash
npm install shadcn-builder-patterns
# or
yarn add shadcn-builder-patterns
```

Then import components as needed:

```tsx
import { FormBuilder } from "shadcn-builder-patterns";

function App() {
  const formStructure = {
    title: "Form Title",
    description: "Form Description",
    fieldsets: [
      {
        title: "Fieldset Title",
        rows: [
          {
            fields: [
              {
                id: "field1",
                label: "Field 1",
                variant: FieldVariant.TEXT,
                placeholder: "Field 1 Placeholder",
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div>
      <FormBuilder structure={formStructure} />
    </div>
  );
}

export default App;
```
