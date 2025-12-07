# Tasks: Physical AI & Humanoid Robotics Textbook

**Input**: Design documents from `/specs/001-physical-ai-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL - only include them if explicitly requested in the feature specification. (Not explicitly requested for these initial tasks.)

**Organization**: Tasks are grouped by logical phases, with chapter development organized under a user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Paths assume a Docusaurus project initialized at the repository root.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Docusaurus project initialization and basic configuration.

- [ ] T001 Initialize Docusaurus project: `npx create-docusaurus@latest my-book-project classic` (execute in root)
- [ ] T002 Configure basic Docusaurus settings in `my-book-project/docusaurus.config.js`
- [ ] T003 Define sidebar navigation structure in `my-book-project/sidebars.js`
- [ ] T004 [P] Customize Docusaurus theme in `my-book-project/docusaurus.config.js` and `my-book-project/src/css/custom.css`
- [ ] T005 Integrate search functionality (e.g., Algolia DocSearch) in `my-book-project/docusaurus.config.js`
- [ ] T006 Configure deployment to GitHub Pages or Vercel in `my-book-project/docusaurus.config.js`

---

## Phase 3: User Story 1 - Chapter Development (Physical AI) (Priority: P1) 🎯 MVP

**Goal**: Create the "Physical AI" chapter with an overview and two lessons, ensuring it is independently testable.

**Independent Test**: After running the Docusaurus development server (`npm start` or `yarn start` in `my-book-project`), navigate to the "Physical AI" chapter and its associated lessons in the browser to verify content rendering and navigation.

### Implementation for User Story 1

- [ ] T007 [US1] Create the `physical-ai` directory in `my-book-project/docs/physical-ai/`
- [ ] T008 [US1] Create `_category_.json` for the Physical AI chapter in `my-book-project/docs/physical-ai/_category_.json`
- [ ] T009 [US1] Create the chapter overview file `index.md` in `my-book-project/docs/physical-ai/index.md`
- [ ] T010 [US1] Create Lesson 1 content file `concepts.md` in `my-book-project/docs/physical-ai/concepts.md`
- [ ] T011 [US1] Create Lesson 2 content file `practical-demos.md` in `my-book-project/docs/physical-ai/practical-demos.md`
- [ ] T012 [US1] Update `my-book-project/sidebars.js` to include the Physical AI chapter and its lessons (if not using auto-generation, or to verify auto-generation)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **User Story 1 (Phase 3)**: Depends on Setup completion.

### Within Each User Story

- Tasks within User Story 1 should be completed sequentially.

### Parallel Opportunities

- Task T004 can run in parallel with other setup tasks.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup.
2.  Complete Phase 3: User Story 1.
3.  **STOP and VALIDATE**: Test User Story 1 independently by running the Docusaurus development server.

### Incremental Delivery

1.  Complete Setup → Docusaurus project initialized.
2.  Add User Story 1 (Physical AI chapter) → Test independently → Deploy/Demo (MVP!)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing (N/A for content creation)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
