# Discrete Math Cheatsheet

## Overview
This README provides a comprehensive cheatsheet for discrete mathematics, including definitions, symbols, formulas, logical equivalences, set theory, probability, functions, and graph theory. It is designed for students and professionals seeking a quick reference for mathematical concepts and proof techniques.

---

## 1. Logical Connectives
| Term             | Symbol   | Definition                   | Logical Expression                  |
|------------------|----------|-----------------------------|-------------------------------------|
| **Negation**     | ¬        | Not                          | `¬P`                                |
| **Conjunction**  | ∧        | And                          | `P ∧ Q`                             |
| **Disjunction**  | ∨        | Or                           | `P ∨ Q`                             |
| **Implication**  | →        | If, Then.                    | `P → Q`                             |
| **Biconditional**| ↔        | If and only if               | `P ↔ Q`                             |
| **Converse**     |          | If Q, then P                 | `Q → P`                             |
| **Inverse**      |          | If ¬P, then ¬Q               | `¬P → ¬Q`                           |
| **Contrapositive**|         | If ¬Q, then ¬P               | `¬Q → ¬P`                           |
| **Therefore**    | ∴        | Before the final statement   | `P ∴ Q`                             |
| **Such That**    | :        | Expresses a condition        | `P : Q`                             |
| **Iff**          | ⇔        | Truth on one side requires truth on the other side | `P ⇔ Q` |

---

## 2. Logical Equivalences
| Term                | Equivalence                         |
|---------------------|-------------------------------------|
| **Identity Laws**   | `P ∧ True ≡ P`, `P ∨ False ≡ P`     |
| **Domination Laws** | `P ∨ True ≡ True`, `P ∧ False ≡ False`|
| **Idempotent Laws** | `P ∨ P ≡ P`, `P ∧ P ≡ P`            |
| **Double Negation** | `¬(¬P) ≡ P`                         |
| **Commutative Laws**| `P ∨ Q ≡ Q ∨ P`, `P ∧ Q ≡ Q ∧ P`    |
| **Associative Laws**| `(P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)`         |
| **Distributive Laws**| `P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)`  |
| **De Morgan's Laws**| `¬(P ∧ Q) ≡ ¬P ∨ ¬Q`                |
| **Absorption Laws** | `P ∨ (P ∧ Q) ≡ P`                   |
| **Negation Laws**   | `P ∧ ¬P ≡ False`                    |

---

## 3. Set Theory
### 3.1 Basic Set Definitions
| Term              | Definition                                                               | Notation                               |
|-------------------|--------------------------------------------------------------------------|----------------------------------------|
| **Set**           | A collection of objects, enclosed in braces.                             | `{a, b, c}`                            |
| **Element/Member**| An object in a set.                                                      | `a ∈ {a, b, c}`                        |
| **Cardinality**   | The total number of elements in a set.                                    | `|A| = 3`                              |
| **Set Builder Notation** | Describe sets with properties instead of listing.                    | `{x | x > 0}`                          |
| **Empty Set**     | A set with no elements.                                                  | `∅`                                    |
| **Powerset**      | The set of all subsets of a set.                                          | `P(S) = {{}, {a}, {b}, {a, b}}`         |
| **Subset**        | Every element in one set is in another.                                   | `A ⊆ B`                                |
| **Proper Subset** | A subset that is not identical to the set.                                | `A ⊂ B`                                |
| **Superset**      | A set that contains another set.                                          | `B ⊇ A`                                |
| **Set Equality**  | Two sets are equal if they have the same elements.                        | `A = B`                                |
| **Universal Set** | A set containing all elements under consideration.                        | `U = {1, 2, 3, ...}`                   |
| **Tuple**         | An ordered list of elements.                                             | `(a, b, c)`                            |

### 3.2 Set Operations
| Operation         | Notation                                     | Definition                                                               |
|-------------------|----------------------------------------------|--------------------------------------------------------------------------|
| **Set Complement**| `A'` or `¬A`                                 | Elements not in set `A`.                                                 |
| **Set Intersection**| `A ∩ B`                                     | Elements common to both `A` and `B`.                                      |
| **Set Union**     | `A ∪ B`                                      | All elements in `A` or `B`.                                              |
| **Cartesian Product**| `A × B`                                    | Set of ordered pairs `(a, b)` where `a ∈ A` and `b ∈ B`.                   |
| **Set Difference**| `A - B`                                      | Elements in `A` but not in `B`.                                           |
| **Symmetric Difference**| `A Δ B`                                 | Elements in either `A` or `B`, but not in both.                            |

---

## 4. Probability and Counting
| Term                       | Definition                                                        | Formula                                |
|----------------------------|-------------------------------------------------------------------|----------------------------------------|
| **Multiplication Principle**| Number of ways to make a list                                     | `n1 * n2 * ... * nk`                   |
| **Factorial**               | Product of positive integers up to `n`.                           | `n! = n * (n-1) * ... * 1`             |
| **Combination**             | Choose `k` elements from `n` without order.                       | `C(n, k) = n! / (k!(n-k)!)`            |
| **Permutation**             | Arrange `k` elements from `n` considering order.                  | `P(n, k) = n! / (n-k)!`                |
| **Binomial Theorem**        | Expansion of `(a + b)^n`.                                         | `(a + b)^n = Σ C(n, k) a^(n-k) b^k`    |
| **Pigeonhole Principle**    | If `n` objects are placed in `m` containers and `n > m`, at least one container has more than one object. |                                        |
| **Generalized Pigeonhole Principle** | If `n` objects are placed in `m` containers, at least one container has at least `ceil(n/m)` objects. |                                        |

---

## 5. Proof-Writing Techniques
| Term                       | Definition                                                        | Example                                |
|----------------------------|-------------------------------------------------------------------|----------------------------------------|
| **Direct Proof**           | Logical statements lead to the conclusion.                        | `If n is odd, then n^2 is odd.`         |
| **Proof by Contradiction** | Assume negation, reach contradiction.                             | `√2 is irrational.`                    |
| **Proof by Induction**     | Prove base case, assume for `k`, prove for `k+1`.                  | `Sum of first n natural numbers.`       |
| **Proof by Cases**         | Split into different cases.                                       | `f(x) = -x if x < 0, x if x ≥ 0.`       |

---

## 6. Graph Theory
| Term                | Definition                                     | Example                              |
|---------------------|------------------------------------------------|--------------------------------------|
| **Vertex, Node**    | Distinct point or object in a graph.            | `A, B, C`                            |
| **Edge**            | Connection between two nodes.                  | `{A, B}`                             |
| **Walk**            | Sequence of vertices with connected edges.     | `A → B → C`                          |
| **Cycle**           | Closed walk with no repeated edges.            | `A → B → C → A`                      |
| **Bipartite Graph** | Vertices can be split into two disjoint sets.   | `K_{m,n}`                            |
| **Complete Graph**  | Each pair of vertices is connected.            | `K_n`                                |
| **Euler Circuit**   | Visits every edge once, returns to start.       |                                      |
| **Hamiltonian Path**| Visits every vertex once.                      |                                      |
| **Graph Coloring**  | Assign colors to vertices such that no two adjacent vertices share the same color. |                                      |

---

## 7. Functions
| Term                    | Definition                                                        |
|-------------------------|-------------------------------------------------------------------|
| **Function**            | Maps inputs (domain) to outputs (codomain).                       |
| **Domain**              | Set of valid input values.                                        |
| **Codomain**            | Set of potential outputs.                                         |
| **Range**               | Set of actual outputs.                                            |
| **One-to-One (Injective)**| Each input has a unique output.                                   |
| **Onto (Surjective)**   | Each output is mapped by some input.                              |
| **Bijective**           | Both injective and surjective.                                    |
| **Inverse Function**    | Reverse the mapping of a function.                                |

---
