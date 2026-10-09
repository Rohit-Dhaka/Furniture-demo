const products = {
  domestic: [
    {
      id: "chhoti-rani",
      name: "Chhoti Rani",
      category: "2 Door Wardrobe",
      subtitle: "Compact Everyday Storage",
      description:
        "Compact steel wardrobe designed for modern bedrooms and everyday storage.",

      images:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "1800 mm",
        width: "900 mm",
        depth: "450 mm",
      },

      colors: [
        {
          name: "Ivory",
          hex: "#F5F0E6",
        },
        {
          name: "Wine Red",
          hex: "#722F37",
        },
        {
          name: "Royal Blue",
          hex: "#4169E1",
        },
      ],

      features: [
        "Strong steel construction",
        "Rust-resistant finish",
        "Smooth door operation",
        "Spacious internal storage",
      ],

      specifications: {
        Material: "Premium Steel",
        Finish: "Powder Coated",
        "Door Type": "2 Door",
        Usage: "Home",
        Height: "1800 mm",
        Width: "900 mm",
        Depth: "450 mm",
      },
    },

    {
      id: "maharani",
      name: "Maharani",
      category: "3 Door Wardrobe",
      subtitle: "Spacious Family Storage",
      description:
        "Spacious storage with a refined finish, built for everyday family use.",

      images:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "1900 mm",
        width: "1200 mm",
        depth: "500 mm",
      },

      colors: [
        {
          name: "Pearl White",
          hex: "#F8F8F5",
        },
        {
          name: "Coffee Brown",
          hex: "#6F4E37",
        },
        {
          name: "Grey",
          hex: "#808080",
        },
      ],

      features: [
        "Heavy-duty steel body",
        "Multiple storage sections",
        "Durable powder coating",
        "Designed for everyday use",
      ],

      specifications: {
        Material: "Premium Steel",
        Finish: "Powder Coated",
        "Door Type": "3 Door",
        Usage: "Home",
        Height: "1900 mm",
        Width: "1200 mm",
        Depth: "500 mm",
      },
    },

    {
      id: "prime-rose",
      name: "Prime Rose",
      category: "4 Door Wardrobe",
      subtitle: "Large Bedroom Storage",
      description:
        "Generous storage capacity with a timeless design for larger bedrooms.",

      images:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "2000 mm",
        width: "1600 mm",
        depth: "520 mm",
      },

      colors: [
        {
          name: "Rose Pink",
          hex: "#E8A0A8",
        },
        {
          name: "Matt Black",
          hex: "#171717",
        },
        {
          name: "Cream",
          hex: "#FFF1D0",
        },
      ],

      features: [
        "Large storage capacity",
        "Strong steel construction",
        "Premium powder coating",
        "Smooth opening mechanism",
      ],

      specifications: {
        Material: "Premium Steel",
        Finish: "Powder Coated",
        "Door Type": "4 Door",
        Usage: "Home",
        Height: "2000 mm",
        Width: "1600 mm",
        Depth: "520 mm",
      },
    },

    {
      id: "basic-42",
      name: "Basic 42",
      category: "Steel Almirah",
      subtitle: "Simple Everyday Storage",
      description:
        "Practical everyday storage with a strong steel body and clean profile.",

      images:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "1800 mm",
        width: "800 mm",
        depth: "450 mm",
      },

      colors: [
        {
          name: "Light Grey",
          hex: "#D3D3D3",
        },
        {
          name: "Blue",
          hex: "#2563EB",
        },
        {
          name: "White",
          hex: "#FFFFFF",
        },
      ],

      features: [
        "Strong steel body",
        "Easy maintenance",
        "Rust-resistant coating",
        "Practical storage layout",
      ],

      specifications: {
        Material: "Steel",
        Finish: "Powder Coated",
        "Door Type": "2 Door",
        Usage: "Home",
        Height: "1800 mm",
        Width: "800 mm",
        Depth: "450 mm",
      },
    },

    {
      id: "supreme",
      name: "Supreme",
      category: "Premium Wardrobe",
      subtitle: "Premium Bedroom Storage",
      description:
        "Premium storage designed to bring strength and character into your room.",

      images:
        "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "2000 mm",
        width: "1400 mm",
        depth: "520 mm",
      },

      colors: [
        {
          name: "Graphite",
          hex: "#383838",
        },
        {
          name: "Champagne",
          hex: "#F7E7CE",
        },
        {
          name: "Dark Brown",
          hex: "#3B2416",
        },
      ],

      features: [
        "Premium steel construction",
        "High-quality finish",
        "Large storage sections",
        "Modern wardrobe design",
      ],

      specifications: {
        Material: "Premium Steel",
        Finish: "Premium Powder Coated",
        "Door Type": "3 Door",
        Usage: "Home",
        Height: "2000 mm",
        Width: "1400 mm",
        Depth: "520 mm",
      },
    },

    {
      id: "secure",
      name: "Secure",
      category: "Almirah with Locker",
      subtitle: "Storage with Security",
      description:
        "Organised everyday storage with an additional secure locker compartment.",

      images:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "1800 mm",
        width: "900 mm",
        depth: "450 mm",
      },

      colors: [
        {
          name: "Steel Grey",
          hex: "#71717A",
        },
        {
          name: "Navy Blue",
          hex: "#1E3A5F",
        },
        {
          name: "Ivory",
          hex: "#F5F0E6",
        },
      ],

      features: [
        "Built-in locker compartment",
        "Strong steel construction",
        "Secure locking system",
        "Separate storage sections",
      ],

      specifications: {
        Material: "Heavy Gauge Steel",
        Finish: "Powder Coated",
        "Door Type": "2 Door + Locker",
        Usage: "Home",
        Height: "1800 mm",
        Width: "900 mm",
        Depth: "450 mm",
      },
    },
  ],

  industrial: [
    {
      id: "industrial-storage",
      name: "Industrial Storage Cabinet",
      category: "Storage Cabinet",
      subtitle: "Heavy Duty Industrial Storage",
      description:
        "Heavy-duty steel storage cabinet designed for factories, workshops and commercial environments.",

      images:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "2000 mm",
        width: "1000 mm",
        depth: "500 mm",
      },

      colors: [
        {
          name: "Industrial Grey",
          hex: "#5B6168",
        },
        {
          name: "Blue",
          hex: "#2563EB",
        },
        {
          name: "Graphite",
          hex: "#383838",
        },
      ],

      features: [
        "Heavy-duty steel construction",
        "High load capacity",
        "Industrial-grade finish",
        "Secure locking system",
      ],

      specifications: {
        Material: "Heavy Gauge Steel",
        Finish: "Industrial Powder Coated",
        "Door Type": "Double Door",
        Usage: "Industrial",
        Height: "2000 mm",
        Width: "1000 mm",
        Depth: "500 mm",
      },
    },

    {
      id: "industrial-locker",
      name: "Industrial Locker",
      category: "Steel Locker",
      subtitle: "Secure Workplace Storage",
      description:
        "Strong and practical steel lockers built for secure storage in workplaces and commercial spaces.",

      images:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "1800 mm",
        width: "900 mm",
        depth: "450 mm",
      },

      colors: [
        {
          name: "Grey",
          hex: "#808080",
        },
        {
          name: "Blue",
          hex: "#2563EB",
        },
        {
          name: "Green",
          hex: "#228B22",
        },
      ],

      features: [
        "Individual storage compartments",
        "Durable steel body",
        "Secure locking system",
        "Easy to maintain",
      ],

      specifications: {
        Material: "Heavy Gauge Steel",
        Finish: "Powder Coated",
        "Door Type": "Multiple Door",
        Usage: "Industrial",
        Height: "1800 mm",
        Width: "900 mm",
        Depth: "450 mm",
      },
    },

    {
      id: "industrial-workbench",
      name: "Industrial Workbench",
      category: "Workstation",
      subtitle: "Heavy Duty Work Surface",
      description:
        "A strong industrial workbench designed for workshops, production areas and professional workspaces.",

      images:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "900 mm",
        width: "1800 mm",
        depth: "750 mm",
      },

      colors: [
        {
          name: "Graphite",
          hex: "#383838",
        },
        {
          name: "Industrial Grey",
          hex: "#5B6168",
        },
        {
          name: "Blue",
          hex: "#2563EB",
        },
      ],

      features: [
        "Heavy-duty steel frame",
        "Large working surface",
        "High load capacity",
        "Designed for professional use",
      ],

      specifications: {
        Material: "Heavy Gauge Steel",
        Finish: "Powder Coated",
        "Top Type": "Heavy Duty Worktop",
        Usage: "Industrial",
        Height: "900 mm",
        Width: "1800 mm",
        Depth: "750 mm",
      },
    },

    {
      id: "industrial-tool-cabinet",
      name: "Tool Cabinet",
      category: "Tool Storage",
      subtitle: "Organised Workshop Storage",
      description:
        "Professional steel tool cabinet designed to keep tools organised, protected and easy to access.",

      images:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1400&q=85",

      dimensions: {
        height: "1000 mm",
        width: "800 mm",
        depth: "500 mm",
      },

      colors: [
        {
          name: "Red",
          hex: "#DC2626",
        },
        {
          name: "Blue",
          hex: "#2563EB",
        },
        {
          name: "Graphite",
          hex: "#383838",
        },
      ],

      features: [
        "Multiple storage drawers",
        "Heavy-duty steel body",
        "Secure central locking",
        "Workshop-ready design",
      ],

      specifications: {
        Material: "Heavy Gauge Steel",
        Finish: "Powder Coated",
        "Storage Type": "Multi Drawer",
        Usage: "Industrial",
        Height: "1000 mm",
        Width: "800 mm",
        Depth: "500 mm",
      },
    },
  ],
};

export default products;