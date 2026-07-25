/**
 * Recursively converts a ReactNode structure (inline JSX elements)
 * back into clean HTML markup for editing inside text editors.
 */
export function reactNodeToHTML(node: any): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  
  // If it is an array of nodes
  if (Array.isArray(node)) {
    return node.map(reactNodeToHTML).join("");
  }

  // Handle standard React elements
  if (node.type) {
    const typeName = node.type;

    // React Fragments (<> ... </>)
    if (
      typeof typeName === "symbol" ||
      typeName.toString().includes("Symbol(react.fragment)") ||
      typeName.toString().includes("react.fragment")
    ) {
      return reactNodeToHTML(node.props?.children);
    }

    // Handle Custom Component functions (if any exist)
    if (typeof typeName === "function") {
      return reactNodeToHTML(node.props?.children);
    }

    // Process nested children
    const childrenHTML = reactNodeToHTML(node.props?.children);

    // Reconstruct inline styling attributes
    let inlineStyle = "";
    if (node.props?.style) {
      inlineStyle = Object.entries(node.props.style)
        .map(([key, val]) => {
          const cssName = key.replace(/[A-Z]/g, (char) => "-" + char.toLowerCase());
          return `${cssName}: ${val}`;
        })
        .join("; ");
    }

    const styleAttr = inlineStyle ? ` style="${inlineStyle}"` : "";
    
    // Special inline formatting for tag attributes
    return `<${typeName}${styleAttr}>${childrenHTML}</${typeName}>\n`;
  }

  // Fallback for props objects or child structures
  if (node.props && node.props.children) {
    return reactNodeToHTML(node.props.children);
  }

  return "";
}
