---
title: Torch Code Learning 1
date: 2025-03-22
tags: ['torch', 'python','probability']
---
<CustomH1>What Does torch.multinomial Do?</CustomH1>
<PostInfo/>

`torch.multinomial()` is a **sampling function** in PyTorch.

It lets you **randomly pick indices** from a given probability distribution (discrete), kind of like spinning a weighted roulette wheel.

## ✅ TL;DR

- `torch.multinomial()` samples **indices** from a **weighted distribution**.
- In your code, it samples 10 times from `[0.1, 0.9]`, favoring index `1`.
- `replacement=True` allows repeated picks.
---

## 🔧 Function Signature

```python
torch.multinomial(input, num_samples, replacement=False)

```

- `input`: A 1D tensor of **weights/probabilities** (don’t need to sum to 1).
- `num_samples`: How many samples you want to draw.
- `replacement`:
    - `True`: You can pick the same index multiple times (with replacement).
    - `False`: Once picked, it can't be picked again (without replacement).

---

## 📌 The Example Code

```python
import torch

probabilities = torch.tensor([0.1, 0.9])
samples = torch.multinomial(probabilities, num_samples=10, replacement=True)
print(samples)

```

---

## 🔨 What’s Happening?

1. `probabilities = torch.tensor([0.1, 0.9])`
    - You have **two outcomes**.
    - Index `0` has a weight of `0.1`.
    - Index `1` has a weight of `0.9`.
    - Much more likely to pick `1` than `0`.
2. `torch.multinomial(probabilities, num_samples=10, replacement=True)`
    - You sample **10 times**.
    - You **allow replacement**, so indices can repeat.
3. The `samples` tensor will contain **10 sampled indices**, mostly `1`.

---

### ✅ Expected Output

(Since sampling is random, your results may vary.)

```python
tensor([1, 1, 1, 1, 1, 1, 1, 1, 1, 0])

```

---

## 🧠 How Is This Useful?

`torch.multinomial()` is commonly used for:

- **Sampling from probability distributions** (e.g., reinforcement learning actions).
- **Weighted random selections**.
- **Simulating stochastic processes**.

