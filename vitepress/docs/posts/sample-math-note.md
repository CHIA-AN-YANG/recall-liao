---
title: Sample Math Note
date: 2024-01-02
tags: ['math', 'calculus', 'examples']
---

# Sample Math Note

## Basic Calculus

Let's explore some basic calculus concepts with LaTeX math notation.

### Derivatives

The derivative of a function $f(x)$ is defined as:

$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

### Integration

The definite integral of a function from $a$ to $b$ is:

$$
\int_a^b f(x)dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i)\Delta x
$$

### Complex Equations

Here are Maxwell's equations in differential form:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

## Code Example

Here's a Python implementation of numerical integration using the trapezoidal rule:

```python
def trapezoidal_integral(f, a, b, n):
    """Compute the definite integral using the trapezoidal rule."""
    h = (b - a) / n
    x = np.linspace(a, b, n+1)
    y = f(x)
    return h * (0.5 * y[0] + np.sum(y[1:-1]) + 0.5 * y[-1])

# Example usage
def f(x):
    return np.sin(x)

result = trapezoidal_integral(f, 0, np.pi, 1000)
print(f"∫sin(x)dx from 0 to π ≈ {result:.6f}")
```

This demonstrates both mathematical equations and code syntax highlighting in our blog.